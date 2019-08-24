var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  // Arrange
  // Act
  // Assert

  var mentors = ["Irina", "Ashleigh", "Etza"];
  var expected = "Hello IrinaAshleighEtza";

  var output = greetPeople(mentors);

  expect(output).toEqual(expected);
});
