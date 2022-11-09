let add = require("./calculator");

describe("requirement one", () => {
  test("return 0 if number is an empty string", function () {
    let numbers = "";
    let result = add(numbers);
    let expected = 0;

    expect(result).toEqual(expected);
  });
});

test(" if number is 1 or more return sum of numbers ", function () {
  const numbers = "5";
  const result = add(numbers);
  const expected = 5;
  expect(result).toEqual(expected);
});

test(" if number is > 1000 should be ignored, so adding 2 + 1001 = 2 ", function () {
  const numbers = "1001,2";
  const result = add(numbers);
  const expected = 2;
  expect(result).toEqual(expected);
});

test(" if there is a negative number return `negatives not allowed:`", function () {
  expect(() => add("-1,2,3")).toThrowError("Negative numbers not allowed: -1");
});