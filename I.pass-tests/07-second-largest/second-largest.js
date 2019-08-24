function secondLargest(num) {
  var max = Math.max(...num);
  num.splice(num.indexOf(max), 1);
  return Math.max(...num);
}

module.exports = secondLargest;
