function fizzbuzz(num) {
  let string = [];
  for (i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      string.push("FizzBuzz");
    } else if (i % 3 == 0 || i.toString().includes(3)) {
      string.push("Fizz");
    } else if (i % 5 == 0 || i.toString().includes(5)) {
      string.push("Buzz");
    } else {
      string.push(i.toString());
    }
  }
  return string.join(", ");
}

module.exports = fizzbuzz;

console.log(fizzbuzz(52));
