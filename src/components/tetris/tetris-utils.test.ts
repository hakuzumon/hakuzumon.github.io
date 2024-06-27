import {Array2d} from "~/components/tetris/tetris-utils";

test("Array2d indexing is correct", () => {
    const [rows, cols] = [2, 3];
    const a = new Array2d(rows, cols, 0);

    // so the array should be 3x2 with indexes like this:
    // [0, 1, 2
    //  3, 4, 5]

    expect(a.get(-1, 0)).toBeUndefined();
    expect(a.get(0, -1)).toBeUndefined();
    expect(a.get(0, rows)).toBeUndefined();
    expect(a.get(0, cols)).toBeUndefined();
    
    a.set(0, 0, 1);
    expect(a.get(0, 0)).toBe(1);

    a.set(0, 1, 1);
    expect(a.get(0, 1)).toBe(1);
    
    // x-index out of bounds
    expect(() => a.set(3, 0, 1)).toThrow();
    expect(() => a.set(0, 2, 1)).toThrow();
    
});
