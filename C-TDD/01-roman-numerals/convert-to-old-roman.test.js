let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let n = 1;
  // Act
  let result = convertToOldRoman(n);
  // Assert
  let expected = "I"
  expect(result).toEqual(expected);;
});
