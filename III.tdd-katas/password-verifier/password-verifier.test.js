var PasswordVerifier = require("./password-verifier");

test("passwords 1", function() {
  var result = PasswordVerifier("1cf45Ae8g");
  expect(result).toEqual("pass ok, meets the 5 conditions");
});

test("passwords 2", function() {
  var result = PasswordVerifier("14Aab");
  expect(result).toEqual("pass ok, meets at least 3 conditions");
});

test("passwords 3", function() {
  var result = PasswordVerifier("1CF45AE8G");
  expect(result).toEqual("pass fail, does not meet 4 condition");
});

/* Passwords 4 - for the tests run faster, the test 3 must be prioritized so that it runs before 2 since test 3 excludes all other tests.*/
