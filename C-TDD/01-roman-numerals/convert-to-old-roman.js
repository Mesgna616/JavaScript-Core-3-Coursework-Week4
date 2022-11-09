
function convertToOldRoman(n) {
    const oldRoman = {
        1: "I",
        4: "IIII",
        5: "V",
        9: "VIIII",
        10: "X",
        40: "XL",
        50: "L",
        60: "LX",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
      };
    
      let romanized = "";
      const keys = Object.keys(oldRoman).reverse();
      keys.forEach((key) => {
        while (key <= n) {
          romanized += oldRoman[key];
          n -= key;
        }
      });
      return romanized;

};



module.exports = convertToOldRoman;
