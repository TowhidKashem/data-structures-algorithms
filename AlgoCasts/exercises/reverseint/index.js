// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = [];
  n.toString()
    .split("")
    .forEach((num) => {
      if (num !== 0) reversed.unshift(num);
    });
  return parseInt(reversed.join(""), 10) * Math.sign(n);
}

module.exports = reverseInt;
