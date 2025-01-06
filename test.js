const add = require('./add');

describe('Addition Tests', () => {
    test('should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    test('should handle zero correctly', () => {
        expect(add(0, 0)).toBe(0);
        expect(add(5, 0)).toBe(5);
    });
});