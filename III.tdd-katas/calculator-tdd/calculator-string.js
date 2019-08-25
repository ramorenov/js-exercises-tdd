function stringCalc(string) {
  let sum = [];
  let number = "0";
  let er1 = /[,/\n/;]/;

  string += ",";

  for (i = 0; i < string.length; i++) {
    if (er1.test(string[i]) == false) {
      number += string[i];
    } else {
      sum.push(parseInt(number));
      number = "";
    }
  }
  if (string.includes("-")) {
    return `negatives not allowed: ${sum.filter(number => number < 0)}`;
  } else {
    return sum.filter(number => number < 1001).reduce((a, b) => a + b);
  }
}

module.exports = stringCalc;
