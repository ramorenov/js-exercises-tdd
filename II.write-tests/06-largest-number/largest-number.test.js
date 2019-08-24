var getLargestNumber = require("./largest-number");

test("get largest number", function() {
  var input = [3, 21, 88, 4, 36];

  var expected = 88;

  var output = getLargestNumber(input);

  expect(output).toEqual(expected);
});

// example// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
