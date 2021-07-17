// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hashMap = {};
  for (char of str) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  let max = { count: 0 };
  for (let char in hashMap) {
    if (max.count < hashMap[char]) {
      max = {
        char,
        count: hashMap[char],
      };
    }
  }

  return max.char;
}

module.exports = maxChar;
