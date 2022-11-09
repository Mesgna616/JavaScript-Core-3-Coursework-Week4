let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
   // Arrange
   let number = [3, 21, 88, 4, 36];
   // Act
   let result = getLargestNumber(number);
   // Assert
   let expected = 88;
   expect(result).toEqual(expected);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
