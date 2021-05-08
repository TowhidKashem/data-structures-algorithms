// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;

  //   let i = str.length;
  //   let result = "";
  //   while (i--) {
  //     if (str[i - 1] === " " || i === 0) {
  //       result = str[i].toUpperCase() + result;
  //     } else {
  //       result = str[i] + result;
  //     }
  //   }
  //   return result;
  ////
  //   return str
  //     .split(" ")
  //     .map(
  //       //   (word) => word.charAt(0).toUpperCase() + word.substr(1, word.length - 1)
  //       (word) => word[0].toUpperCase() + word.slice(1)
  //     )
  //     .join(" ");
}

module.exports = capitalize;
