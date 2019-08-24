var fizzbuzz = require("./fizz-buzz");

test("prints 1", function() {
  var result = fizzbuzz(1);
  expect(result).toEqual("1");
});

test("prints 1,2", function() {
  var result = fizzbuzz(2);
  expect(result).toEqual("1, 2");
});

test("prints if meets new requirements ", function() {
  var result = fizzbuzz(52);
  expect(result).toEqual(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Fizz, Buzz, 41, Fizz, Fizz, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, Buzz"
  );
});
