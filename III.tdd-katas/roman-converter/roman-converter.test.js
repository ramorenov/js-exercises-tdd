let roman = require("./roman-converter");

test("Convert to old roman", function() {
  let expected = "IIII";
  let output = roman.convertToOldRoman(4);

  expect(output).toEqual(expected);
});

test("Convert to new roman", function() {
  let expected = "IV";
  let output = roman.convertToNewRoman(4);

  expect(output).toEqual(expected);
});
