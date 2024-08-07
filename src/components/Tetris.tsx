import {createEffect, createSignal, JSXElement, onCleanup, onMount} from "solid-js";
import styles from "./Tetris.module.css";
import {randomItem} from "~/utils";
import {Array2d} from "~/components/tetris/tetris-utils";

const blockSize = 40;
const w = 10;
const h = 20;

class Matrix2x2 {
    values: number[];
    
    constructor(from: number[]) {
        if (from.length != 4)
            throw Error(`Invalid number of arguments: ${from} (must be 4)`);
        this.values = from;
    }
    
    multiply(v: Vector2d): Vector2d {
        const A = this.values;
        return new Vector2d(
            A[0] * v.x + A[1] * v.y, 
            A[2] * v.x + A[3] * v.y
        );
    }
}

function rotationMatrix(angle: number): Matrix2x2 {
    return new Matrix2x2([
        Math.cos(angle), -Math.sin(angle),
        Math.sin(angle), Math.cos(angle),
    ]);
}

class Vector2d {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    plus(other: Vector2d) {
        return new Vector2d(this.x + other.x, this.y + other.y);
    }

    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }
    
    static average(points: Vector2d[]): Vector2d {
        let sumX = 0;
        let sumY = 0;
        for (const point of points) {
            sumX += point.x;
            sumY += point.y;
        }
        return new Vector2d(sumX / points.length, sumY / points.length);
    }
}

class Shape {
    private readonly key: string;
    private readonly originalPoints: Vector2d[];
    private readonly color: Color;
    private rotation: Matrix2x2 | null;
    private translation: Vector2d | null;
    private points: Vector2d[];

    constructor(key: string, points: Vector2d[], color: Color) {
        this.key = key;
        this.originalPoints = points;
        this.color = color;
        this.rotation = null;
        this.translation = null;
        this.points = points;
    }

    getPoints() {
        // todo readonly copy?
        return this.points;
    }
    
    rotate(radians: number) {
        this.rotation = rotationMatrix(radians);
    }

    previewRotatedPoints(radians: number) {
        const rotation = rotationMatrix(radians);
        return this.originalPoints.map(p => {
            const t = rotation.multiply(p);
            const r = this.translation != null ? this.translation.plus(t) : t;
            r.round();
            return r;
        });
    }

    translate(vector: Vector2d) {
        this.translation = vector;
    }
    
    applyTransformations() {
        this.points = this.originalPoints.map(p => {
            const t = this.rotation != null ? this.rotation.multiply(p) : p;
            const r = this.translation != null ? this.translation.plus(t) : t;
            r.round();
            return r;
        });
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        for (const p of this.points) {
            renderBlock(p.x, p.y, this.color, ctx);
        }
    }

    getColor() {
        return this.color;
    }
    
    static newInstance(key: string, color: Color) {
        const points: Vector2d[] = [];
            
        for (let i in shapes[key]) {
            const [x, y] = shapes[key][i];
            points.push(new Vector2d(x, y));
        }
        
        return new Shape(key, points, color);
    }

    getKey() {
        return this.key;
    }

    clone() {
        return Shape.newInstance(this.key, this.color);
    }
}

const shapes: {[key: string]: number[][]} = {
    I: [[0, 1], [0, 0], [0, -1], [0, -2]],
    L: [[0, 1], [0, 0], [0, -1], [1, -1]],
    J: [[0, 1], [0, 0], [0, -1], [-1, -1]],
    T: [[-1, 0], [0, 0], [0, -1], [1, 0]],
    O: [[0, 0], [1, 1], [1, 0], [0, 1]],
    Z: [[0, 0], [0, 1], [1, 1], [-1, 0]],
    S: [[0, 0], [0, 1], [-1, 1], [1, 0]],
}

enum Color {
    NOTHING, RED, GREEN, BLUE, YELLOW, PURPLE, ORANGE, BLACK
}

const blockColors = [Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW, Color.PURPLE];

function getColor(c: Color): string | null {
    switch (c) {
        case Color.ORANGE:
            return "#d64b00";
        case Color.YELLOW:
            return "#e4d100";
        case Color.PURPLE:
            return "#9404d8";
        case Color.RED:
            return "#d80061";
        case Color.GREEN:
            return "#17cd01";
        case Color.BLUE:
            return "#072bcf";
        case Color.BLACK:
            return "#000";
        case Color.NOTHING:
        default:
            return null;
    }
}

function renderBlock(x: number, y: number, color: Color, ctx: CanvasRenderingContext2D) {
    if (color == null || color === Color.NOTHING) {
        return;
    } else {
        ctx.fillStyle = getColor(color)!;
        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);   
    }
}

function renderRow(y: number, fillStyle: string, mode: GlobalCompositeOperation, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = fillStyle;
    const originalMode = ctx.globalCompositeOperation;
    ctx.globalCompositeOperation = mode;
    ctx.fillRect(0, y * blockSize, w * blockSize, blockSize);
    ctx.globalCompositeOperation = originalMode;
}

enum Direction {
    LEFT, RIGHT, UP, DOWN
}

function isOverlapping(area: Array2d<Color>, object: Shape) {
    return !isInBounds(object.getPoints(), area);
}

function isBlockedFromDirection(area: Array2d<Color>, object: Shape, direction: Direction) {
    let offsetX = 0;
    let offsetY = 0;
    switch (direction) {
        case Direction.LEFT:
            offsetX = -1;
            break;
        case Direction.RIGHT:
            offsetX = 1;
            break;
        case Direction.UP:
            offsetY = -1;
            break;
        case Direction.DOWN:
            offsetY = 1;
            break;
    }

    return object.getPoints().some((p) => {
        const x = p.x + offsetX;
        const y = p.y + offsetY;
        return area.get(x, y) != Color.NOTHING;
    });
}

function isRotationBlocked(area: Array2d<Color>, object: Shape, rotation: number) {
    return !isInBounds(object.previewRotatedPoints(rotation), area);
}

function isInBounds(points: Vector2d[], area: Array2d<Color>) {
    return !points.some((p) => {
        const slot = area.get(p.x, p.y);

        if (slot === Color.NOTHING) {
            return false;
        } else if (slot !== undefined) {
            return true;
        } else {
            // out-of-bounds, but the top is open
            return !(p.y < 0 && p.x >= 0 && p.x < area.cols);
        }
    });
}

enum GameState {
    STOPPED, PLAY, STOP_REQUESTED
}

enum PlayerAction {
    MOVE_LEFT, MOVE_RIGHT, MOVE_DOWN, ROTATE
}

export interface TetrisProps {
    initialDelayMs?: number;
}


export default function(props: TetrisProps) {
    const [score, setScore] = createSignal(0);
    
    let next = Shape.newInstance(randomItem(Object.keys(shapes), 'O'), Color.RED);
    let gameObject: Shape | null = null;
    let gameArea: Array2d<Color>;
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    const initialRot = 0;
    const initialLoc = new Vector2d(Math.floor(w / 2), Number.MIN_VALUE);
    let rotation = initialRot;
    let moveY = initialLoc.y;
    let moveX = initialLoc.x;
    
    let preview: HTMLCanvasElement;
    let previewCtx: CanvasRenderingContext2D;
    
    // input
    
    // As a stack, only the last on has effect. But it "remembers" keys hold down.
    let actionStack: PlayerAction[] = [];
    const activeAction = function() {
        if (actionStack.length === 0) return undefined;
        else return actionStack[actionStack.length - 1];
    }
    
    // scheduling
    let state = GameState.STOPPED;
    let processedIntervalUptoMs: number | undefined = undefined;
    let lastPlayerActionMs: number = 0;
    
    let newAction = true;
    let repeating = false;
    
    // animations
    
    // row index (y) mapped to a value between 0..1, where the value is alpha 
    let rowDestruction = new Map<number, number>();
    
    const keyRepeatInitialDelayMs = 250;
    const automaticGameIntervalMs = 500;
    const actionThrottles = new Map<PlayerAction, number>();
    // TODO since we probably get 60 fps, which is ~16ms, timings close to that are probably not very accurate?
    actionThrottles.set(PlayerAction.MOVE_LEFT, 30);
    actionThrottles.set(PlayerAction.MOVE_RIGHT, 30);
    actionThrottles.set(PlayerAction.MOVE_DOWN, 30);
    actionThrottles.set(PlayerAction.ROTATE, 250);
    
    onMount(() => {
        canvas = document.getElementsByClassName(styles.tetris)[0]! as HTMLCanvasElement;
        preview = document.getElementsByClassName(styles.preview)[0]! as HTMLCanvasElement;
        ctx = canvas.getContext('2d')!;
        previewCtx = preview.getContext('2d')!;

        gameArea = new Array2d(h, w, Color.NOTHING);
        
        setTimeout(() => {
            play();
        }, props.initialDelayMs ?? 1);
    });

    function play() {
        state = GameState.PLAY;
        processMovement();
        render();
        requestAnimationFrame(frame);
    }
    
    function frame(timestampMs: number) {
        // animations
        const hasBlockingAnimations = rowDestruction.size > 0;
        const toCollapse: number[] = [];
        for (const [y, alpha] of rowDestruction) {
            if (alpha >= 1) {
                rowDestruction.delete(y);
                toCollapse.push(y);
            } else {
                rowDestruction.set(y, alpha + 0.16); // TODO assumes framerate
            }
        }
        const collapsedRows = toCollapse.length;
        if (collapsedRows > 0) {
            gameArea.collapseRows(toCollapse);
            setScore(score() + 100 * collapsedRows * collapsedRows);
        }

        if (!hasBlockingAnimations && gameObject == null) {
            newGameObject();
        }

        // game actions
        if (processedIntervalUptoMs === undefined) {
            processedIntervalUptoMs = timestampMs;
        }

        const elapsedInterval = timestampMs - processedIntervalUptoMs;
        if (elapsedInterval >= automaticGameIntervalMs) {
            intervalAction();
            processedIntervalUptoMs = timestampMs;
        }
        
        // player actions
        let executed = false;
        const action = activeAction();
        if (action !== undefined && gameObject != null) {
            if (newAction) {
                handlePlayerAction(action);
                executed = true;
                newAction = false;
            } else {
                // we have already executed the action at least once
                const sinceLastPlayerAction = timestampMs - lastPlayerActionMs;
                
                if (!repeating) {
                    if (sinceLastPlayerAction >= keyRepeatInitialDelayMs) {
                        handlePlayerAction(action);
                        executed = true;
                        repeating = true;
                    }
                } else {
                    const throttleMs = actionThrottles.get(action) || 0;

                    if (sinceLastPlayerAction >= throttleMs) {
                        handlePlayerAction(action);
                        executed = true;
                    }    
                }
            }
        }
        
        if (executed) {
            lastPlayerActionMs = timestampMs;
        }

        if (state === GameState.PLAY) {
            requestAnimationFrame(play);
        } else if (state === GameState.STOP_REQUESTED) {
            state = GameState.STOPPED;
            processedIntervalUptoMs = undefined;
        }
    }
    
    function stop() {
        state = GameState.STOP_REQUESTED;
    }
    
    function moveGameObjectInsideBounds(points: Vector2d[]) {
        let minY = Number.MAX_VALUE;

        for (const p of points) {
            if (p.y < minY) minY = p.y;
        }
        
        moveY = -minY;
    }
    
    function intervalAction() {
        if (gameObject != null) {
            if (isBlockedFromDirection(gameArea, gameObject, Direction.DOWN)) {
                freezeObject(gameObject);
                removeFullRows(gameObject);
                gameObject = null;
            } else {
                moveY += 1;
                processMovement();
            }
        }
    }
    
    function newGameObject() {
        rotation = initialRot;
        moveX = initialLoc.x;
        moveY = initialLoc.y;

        gameObject = next.clone();

        const nextColor = randomItem(blockColors, next.getColor());
        const nextShape = randomItem(Object.keys(shapes), next.getKey());
        next = Shape.newInstance(nextShape, nextColor);
        renderPreview();
        
        moveGameObjectInsideBounds(gameObject.getPoints());
        actionStack = [];
    }
    
    function freezeObject(obj: Shape) {
        for (const point of obj.getPoints()) {
            gameArea.set(point.x, point.y, obj.getColor());
        }
        setScore(score() + 10);
    }
    
    function removeFullRows(obj: Shape) {
        // removable rows can only happen on rows where landed shape has blocks
        let [minY, maxY] = [h, 0];
        for (let v of obj.getPoints()) {
            if (v.y < minY) minY = v.y;
            if (v.y > maxY) maxY = v.y;
        }
        
        // object has already been frozen, so gameArea contains its points
        for (let y = maxY; y >= minY; y--) {
            let blocks = 0;
            gameArea.forRow(y, (color, x) => {
                if (color != Color.NOTHING && color != undefined)
                    blocks++;
            });
            if (blocks == w) {
                rowDestruction.set(y, 0);
            }
        }
    }
    
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault(); // prevent scrolling
        }

        if (event.repeat)
            return;

        const action = parseActionFromKey(event.key);
        if (action !== undefined)
            registerPlayerAction(action);
    }

    const handleKeyUp = (event: KeyboardEvent) => {
        const action = parseActionFromKey(event.key);
        if (action !== undefined)
            deregisterPlayerAction(action);
    }

    function parseActionFromKey(key: string): PlayerAction | undefined {
        switch (key) {
            case 'ArrowUp': return PlayerAction.ROTATE;
            case 'ArrowLeft': return PlayerAction.MOVE_LEFT;
            case 'ArrowRight': return PlayerAction.MOVE_RIGHT;
            case 'ArrowDown': return PlayerAction.MOVE_DOWN;
            default: return undefined;
        }
    }
    
    createEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        onCleanup(() => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        });
    });
    
    function registerPlayerAction(action: PlayerAction) {
        if (!actionStack.includes(action)) {
            actionStack.push(action);
            newAction = true;
            repeating = false;
        }
    }
    
    function deregisterPlayerAction(action: PlayerAction) {
        const index = actionStack.indexOf(action);
        if (index != -1) {
            actionStack.splice(index, 1);
        }
        const current = activeAction();
        if (current) {
            // re-register previous action, if it is still pressed
            registerPlayerAction(current);
        } else {
            repeating = false;
            lastPlayerActionMs = 0;
        }
    }
    
    function handlePlayerAction(action: PlayerAction) {
        if (state !== GameState.PLAY || gameObject == null) {
            return;
        }

        switch (action) {
            case PlayerAction.ROTATE:
                if (!isRotationBlocked(gameArea, gameObject, (rotation + 1) * Math.PI / 2)) {
                    rotation += 1;
                }
                break;
            case PlayerAction.MOVE_DOWN:
                if (!isBlockedFromDirection(gameArea, gameObject, Direction.DOWN)) {
                    moveY += 1;
                }
                break;
            case PlayerAction.MOVE_LEFT:
                if (!isBlockedFromDirection(gameArea, gameObject, Direction.LEFT)) {
                    moveX -= 1;
                }
                break;
            case PlayerAction.MOVE_RIGHT:
                if (!isBlockedFromDirection(gameArea, gameObject, Direction.RIGHT)) {
                    moveX += 1;
                }
                break;
            default:
        }
        processMovement();
    }
    
    function processMovement() {
        if (gameObject != null) {
            gameObject.rotate(rotation * Math.PI / 2);
            gameObject.translate(new Vector2d(moveX, moveY));
            gameObject.applyTransformations();

            if (isOverlapping(gameArea, gameObject)) {
                stop();
            }
        }
    }
    
    function render() {
        clear(ctx, canvas);
        
        gameArea.forEach((cell, x, y) => {
            if (cell != Color.NOTHING && cell != undefined) {
                renderBlock(x, y, cell, ctx);
            }
        })

        if (gameObject != null) {
            gameObject.render(ctx, canvas);
        }

        for (const [y, value] of rowDestruction) {
            renderRow(y, `rgba(255, 255, 255, ${value})`, "screen", ctx);
        }
    }

    function clear(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    function renderPreview() {
        clear(previewCtx, preview);
        
        const avg = Vector2d.average(next.getPoints());
        for (const p of next.getPoints()) {
            renderBlock(p.x + 2 - avg.x, p.y + 2 - avg.y, Color.BLACK, previewCtx);
        }
    }

    return (
        <div class="flex items-center bg-amber-800/80 h-full animate-fadeIn">
            <canvas class={styles.tetris} width={blockSize * w} height={blockSize * h}></canvas>
            <div class="flex flex-col h-full justify-between gap-4 p-4 items-center text-2xl mx-auto">
                <div class="w-16 h-16 md:w-24 md:h-24">
                    <canvas class={styles.preview} width={blockSize * 5} height={blockSize * 5}></canvas>
                </div>
                <div class="text-center text-xl">Pisteet:<br/>{score()}</div>
                <div class="flex flex-col items-center">
                    <TetrisControlButton onActivation={() => registerPlayerAction(PlayerAction.ROTATE)} onDeactivation={() => deregisterPlayerAction(PlayerAction.ROTATE)}>Käännä</TetrisControlButton>
                    <div class="flex gap-2 mt-2 mb-2">
                        <TetrisControlButton onActivation={() => registerPlayerAction(PlayerAction.MOVE_LEFT)} onDeactivation={() => deregisterPlayerAction(PlayerAction.MOVE_LEFT)}>&#8592;</TetrisControlButton>
                        <TetrisControlButton onActivation={() => registerPlayerAction(PlayerAction.MOVE_RIGHT)} onDeactivation={() => deregisterPlayerAction(PlayerAction.MOVE_RIGHT)}>&#8594;</TetrisControlButton>
                    </div>
                    <TetrisControlButton onActivation={() => registerPlayerAction(PlayerAction.MOVE_DOWN)} onDeactivation={() => deregisterPlayerAction(PlayerAction.MOVE_DOWN)}>&#8595;</TetrisControlButton>
                </div>
            </div>
        </div>
    )
}

interface TetrisButtonProps {
    children: JSXElement;
    onActivation: (event: any) => void;
    onDeactivation: (event: any) => void;
}

function TetrisControlButton(props: TetrisButtonProps) {
    
    function pointerDown(e: Event) {
        e.preventDefault();
        props.onActivation(e);
    }

    function pointerUp(e: Event) {
        e.preventDefault();
        props.onDeactivation(e);
    }
    
    return (
        <button class="border border-amber-700 px-3 py-2 sm:px-6 sm:py-4 md:p-6 min-w-12
        rounded active:bg-amber-700 transition-all select-none" 
                onContextMenu={(e) => e.preventDefault()} 
                onPointerDown={(e) => pointerDown(e)}
                onPointerUp={(e) => pointerUp(e)}
                onPointerCancel={(e) => pointerUp(e)}>
            {props.children}
        </button>
    )
}