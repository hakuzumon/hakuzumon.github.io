
export class Array2d<T> {
    private readonly data: T[];
    private readonly rows: number;
    private readonly cols: number;

    constructor(rows: number, cols: number, defaultValue: T) {
        if (rows < 1 || cols < 1) {
            throw Error("Rows and cols must be positive");
        }
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        for (let i = 0; i < rows * cols; i++) {
            this.data[i] = defaultValue;
        }
    }

    get(x: number, y: number): T | undefined {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows)
            return undefined;

        return this.data[y * this.cols + x];
    }

    set(x: number, y: number, value: T) {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            throw Error(`Index out of bounds: (${x}, ${y})`);
        }
        this.data[y * this.cols + x] = value;
    }

    forEach(cb: (value: T | undefined, x: number, y: number) => void) {
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                cb(this.get(i, j), i, j);
            }
        }
    }
}