var getSecondThirdSmallest = require("./get-second-third");

test("get Second Third Smallest", function() {
  var input = [90, 5, 11, 8, 6];

  var expected = [6, 8, [90, 5, 11, 8, 6]];
  var output = getSecondThirdSmallest(input);

  expect(output).toEqual(expected);
  //expect(input).not(newArray);
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
