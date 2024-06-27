/**
 * Shuffles the given array in place.
 */
export function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function clamp(min: number, n: number, max: number): number {
    if (n < min) return min;
    else if (n > max) return max;
    else return n;
}

export function randomItem<T>(array: T[], exclude?: T): T {
    if (array.length === 0)
        throw Error("Empty array");
    
    let i = 0;
    let result;
    while (++i < 100) {
        result = array[Math.floor(Math.random() * array.length)];
        if (result != exclude) {
            break;
        }
    }
    return result!;
}