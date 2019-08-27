let roman = {
  convertToOldRoman: function(num) {
    let ara = [1, 5, 10, 50, 90, 100, 500, 1000];
    let rom = ["I", "V", "X", "L", "XC", "C", "D", "M"];
    let temp = 0;
    let div = num;
    let converted = "";
    for (i = 7; i >= 0; i--) {
      if (div >= ara[i]) {
        temp = Math.floor(div / ara[i]);
        for (j = 0; j < temp; j++) {
          converted += rom[i];
        }
        div = div % ara[i];
      }
    }
    return converted;
  },

  convertToNewRoman: function(num) {
    let ara = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let rom = [
      "I",
      "IV",
      "V",
      "IX",
      "X",
      "XL",
      "L",
      "XC",
      "C",
      "CD",
      "D",
      "CM",
      "M"
    ];
    let temp = 0;
    let div = num;
    let converted = "";
    for (i = 12; i >= 0; i--) {
      if (div >= ara[i]) {
        temp = Math.floor(div / ara[i]);
        for (j = 0; j < temp; j++) {
          converted += rom[i];
        }
        div = div % ara[i];
      }
    }
    return converted;
  }
};

module.exports = roman;

// console.log(convertToOldRoman(4));
// console.log(convertToNewRoman(4));
