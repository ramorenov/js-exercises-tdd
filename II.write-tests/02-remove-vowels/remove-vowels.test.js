var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  // Act
  // Assert
  var string = "samuel";

  var expected = "_a_ue_";
  var output = removeVowels(string);

  expect(output).toEqual(expected);
});
