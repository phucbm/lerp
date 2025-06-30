import {lerp} from '../src';

describe('lerp function', () => {
    test('basic interpolation with 50%', () => {
        expect(lerp(0, 100, 0.5)).toBe(50);
    });

    test('basic interpolation with 25%', () => {
        expect(lerp(0, 100, 0.25)).toBe(25);
    });

    test('uses default fraction (0.1) when not provided', () => {
        expect(lerp(0, 100)).toBe(10);
    });

    test('no movement with fraction 0', () => {
        expect(lerp(50, 100, 0)).toBe(50);
    });

    test('instant movement with fraction 1', () => {
        expect(lerp(0, 100, 1)).toBe(100);
    });

    test('works with negative values', () => {
        expect(lerp(-50, 50, 0.5)).toBe(0);
        expect(lerp(50, -50, 0.5)).toBe(0);
    });

    test('works with decimal values', () => {
        expect(lerp(0, 1, 0.3)).toBeCloseTo(0.3);
        expect(lerp(0.5, 1.5, 0.5)).toBeCloseTo(1);
    });

    test('handles same start and end values', () => {
        expect(lerp(42, 42, 0.5)).toBeCloseTo(42);
        expect(lerp(42, 42)).toBeCloseTo(42);
    });

    test('animation sequence produces decreasing deltas', () => {
        let current = 0;
        const target = 100;
        const values: number[] = [];

        for (let i = 0; i < 5; i++) {
            current = lerp(current, target, 0.2);
            values.push(current);
        }

        // Each step should be smaller than the previous
        const deltas = values.map((value, index) =>
            index === 0 ? value : value - values[index - 1]
        );

        for (let i = 1; i < deltas.length; i++) {
            expect(deltas[i]).toBeLessThan(deltas[i - 1]);
        }
    });

    test('approaches target value asymptotically', () => {
        let current = 0;
        const target = 100;

        // After many iterations, should be very close to target
        for (let i = 0; i < 100; i++) {
            current = lerp(current, target, 0.1);
        }

        expect(current).toBeGreaterThan(99); // Should be very close to 100
        expect(current).toBeLessThan(target); // But never quite reach it
    });
});