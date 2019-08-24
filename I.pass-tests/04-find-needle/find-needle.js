function findNeedle(words, item) {
  let answer;
  words.forEach((element, index) => {
    if (element == item) {
      answer = index;
    }
  });
  return answer;
}

module.exports = findNeedle;
