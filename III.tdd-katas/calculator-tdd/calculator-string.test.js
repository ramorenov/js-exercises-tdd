let stringCalc = require("./calculator-string");

test("Step 1a", function() {
  var result = stringCalc("");
  expect(result).toEqual(0);
});

test("Step 1b", function() {
  var result = stringCalc("1");
  expect(result).toEqual(1);
});

test("Step 1c", function() {
  var result = stringCalc("1,2");
  expect(result).toEqual(3);
});

test("Step 2", function() {
  var result = stringCalc("0,1,24,120,50");
  expect(result).toEqual(195);
});

test("Step 3", function() {
  var result = stringCalc("1\n2,3");
  expect(result).toEqual(6);
});

test("Step 4", function() {
  var result = stringCalc("//;\n1;2");
  expect(result).toEqual(3);
});

test("Step 5", function() {
  var result = stringCalc("1,4,-1,-5");
  expect(result).toEqual("negatives not allowed: -1,-5");
});

test("Step 6", function() {
  var result = stringCalc("1,4,1,1004");
  expect(result).toEqual(6);
});
