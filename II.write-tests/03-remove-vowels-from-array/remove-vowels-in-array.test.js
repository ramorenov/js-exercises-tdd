var removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  // Arrange
  // Act
  // Assert
  var input = ["Irina", "Etza", "Daniel"];

  var expected = ["rn", "tz", "Dnl"];
  var output = removeVowelsForWords(input);

  expect(output).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
