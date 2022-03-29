const { sum, findOppositeNum, removeFirstAndLast, repeatStr } = require("../jest/index.js");
test('Sum should return the sum of all positive elements', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, -2, -33])).toBe(0);
    expect(sum([1, -2, 3])).toBe(4);
});

test('Find an opposite of integer or a floating-point number', () => {
    expect(findOppositeNum(-2)).toEqual(2);
    expect(findOppositeNum(16)).toEqual(-16);
    expect(findOppositeNum(0)).toEqual(0);
});

describe("Func removeFirstAndLast removes the first and last characters of a string", () => {
    test('remove last and first', () => {
        expect(removeFirstAndLast('eloquent')).toBe('loquen');
        expect(removeFirstAndLast('person')).toBe('erso');
    });
    test('check if defined', () => {
        expect(removeFirstAndLast('elont')).toBeDefined();
        expect(removeFirstAndLast('e')).not.toBeUndefined();
    });
});

test("repeatStr repeats the given string exactly n times", () => {
    expect(repeatStr(3, "*")).toEqual("***");
})