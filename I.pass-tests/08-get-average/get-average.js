// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(arr) {
  newarr = arr.filter(item => typeof item === "number");
  return newarr.reduce((a, b) => a + b) / newarr.length;
}

module.exports = average;
