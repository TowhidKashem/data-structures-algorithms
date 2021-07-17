// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let newStr = "";
  // let i = str.length;
  // while (i--) {
  //   newStr += str[i];
  // }
  // return newStr;

  return str
    .split("")
    .reduce((accumulator, curValue) => curValue + accumulator, "");
}

module.exports = reverse;
