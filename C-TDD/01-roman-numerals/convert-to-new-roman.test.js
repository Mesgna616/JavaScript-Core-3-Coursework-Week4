let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  let n = 1;
  // Act
  let result = convertToNewRoman(n);
 
  // Assert
  let expected = "I";
  expect(result).toEqual(expected);
  

  expect(result).toEqual(expected);
});
