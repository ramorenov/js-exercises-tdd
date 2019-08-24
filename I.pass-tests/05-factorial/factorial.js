// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

function factorial(int) {
  var i = 1;
  var total = 1;
  do {
    total *= i;
    i++;
  } while (i <= int);
  return total;
}

module.exports = factorial;
