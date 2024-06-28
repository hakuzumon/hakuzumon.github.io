import {createEffect, onCleanup, onMount} from "solid-js";
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
    NOTHING, RED, GREEN, BLUE, YELLOW, PURPLE, ORANGE
}

const visibleColors = [Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW, Color.PURPLE];

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
        const offsetX = 0;
        const offsetY = 0;

        ctx.fillRect(x * blockSize + offsetX, y * blockSize + offsetY, blockSize, blockSize);   
    }
}

enum Direction {
    LEFT, RIGHT, UP, DOWN
}

function isOverlapping(area: Array2d<Color>, object: Shape) {
    return object.getPoints().some((p) => {
        const c = area.get(p.x, p.y);
        return c !== Color.NOTHING;
    });
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
    return object.previewRotatedPoints(rotation).some((p) => {
        return area.get(p.x, p.y) != Color.NOTHING;
    });
}

enum GameState {
    STOPPED, PLAY, STOP_REQUESTED
}

export default function() {
    let gameObject = Shape.newInstance(randomItem(Object.keys(shapes)), Color.RED);
    let gameArea: Array2d<Color>;
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    const initialRot = 0;
    const initialLoc = new Vector2d(Math.floor(w / 2), 2);
    let rotation = initialRot;
    let moveY = initialLoc.y;
    let moveX = initialLoc.x;
    
    // scheduling
    let state = GameState.STOPPED;
    let processedUptoMs: number | undefined = undefined;
    let actionIntervalMs = 500;
    
    onMount(() => {
        canvas = document.getElementsByClassName(styles.tetris)[0]! as HTMLCanvasElement;
        ctx = canvas.getContext('2d')!;

        gameArea = new Array2d(h, w, Color.NOTHING);
        
        play();
    });

    function play() {
        state = GameState.PLAY;
        render();
        requestAnimationFrame(frame);
    }
    
    function frame(timestampMs: number) {
        if (processedUptoMs === undefined) {
            processedUptoMs = timestampMs;
        }
        
        const elapsedInterval = timestampMs - processedUptoMs;
        if (elapsedInterval >= actionIntervalMs) {
            intervalAction();
            processedUptoMs = timestampMs;
        }
        
        if (state === GameState.PLAY) {
            requestAnimationFrame(play);
        } else if (state === GameState.STOP_REQUESTED) {
            state = GameState.STOPPED;
            processedUptoMs = undefined;
        }
    }
    
    function stop() {
        state = GameState.STOP_REQUESTED;
    }
    
    function intervalAction() {
        if (isBlockedFromDirection(gameArea, gameObject, Direction.DOWN)) {
            freezeObject();
            removeFullRows();
            newGameObject();
        } else {
            moveY += 1;
        }
        render();
    }
    
    function newGameObject() {
        rotation = initialRot;
        moveX = initialLoc.x;
        moveY = initialLoc.y;

        const targetColor = randomItem(visibleColors, gameObject.getColor());
        const targetShape = randomItem(Object.keys(shapes), gameObject.getKey());
        gameObject = Shape.newInstance(targetShape, targetColor);
    }
    
    function freezeObject() {
        for (const point of gameObject.getPoints()) {
            gameArea.set(point.x, point.y, gameObject.getColor());
        }
    }
    
    function removeFullRows() {
        // removable rows can only happen on rows where landed shape has blocks
        let [minY, maxY] = [h, 0];
        for (let v of gameObject.getPoints()) {
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
                gameArea.collapseRow(y);
                y++; // process same row twice
            }
        }
    }

    createEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault(); // prevent scrolling
            }
            
            if (state !== GameState.PLAY) {
                return;
            }
            
            switch (event.key) {
                case 'ArrowUp':
                    if (!isRotationBlocked(gameArea, gameObject, (rotation + 1) * Math.PI / 2)) {
                        rotation += 1;
                    }
                    break;
                case 'ArrowDown':
                    if (!isBlockedFromDirection(gameArea, gameObject, Direction.DOWN)) {
                        moveY += 1;
                    }
                    break;
                case 'ArrowLeft':
                    if (!isBlockedFromDirection(gameArea, gameObject, Direction.LEFT)) {
                        moveX -= 1;
                    }
                    break;
                case 'ArrowRight':
                    if (!isBlockedFromDirection(gameArea, gameObject, Direction.RIGHT)) {
                        moveX += 1;
                    }
                    break;
                default:
            }
            render();
        }
        
        window.addEventListener("keydown", handleKeyDown);
        onCleanup(() => {
            window.removeEventListener("keydown", handleKeyDown);
        });
    });
    
    function render() {
        clear(ctx, canvas);
        
        gameArea.forEach((cell, x, y) => {
            if (cell != Color.NOTHING && cell != undefined) {
                renderBlock(x, y, cell, ctx);
            }
        })
        
        const obj = gameObject;
        if (obj != null) {
            obj.rotate(rotation * Math.PI / 2);
            obj.translate(new Vector2d(moveX, moveY));
            obj.applyTransformations();
            obj.render(ctx, canvas);
            if (isOverlapping(gameArea, gameObject)) {
                stop();
            }
        }
    }

    function clear(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return (
        <canvas class={styles.tetris} width={blockSize * w} height={blockSize * h}></canvas>
    )
}