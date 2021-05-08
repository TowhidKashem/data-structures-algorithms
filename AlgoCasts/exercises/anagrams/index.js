// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const str1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  const str2 = stringB.replace(/[^\w]/g, "").toLowerCase();

  return str1.split("").sort().join() === str2.split("").sort().join();

  // for (let char of stringA) {
  //   stringB = stringB.replace(char, "");
  // }

  // return stringB.length === 0;

  ///////

  // if (str1.length !== str2.length) return false;

  // const str1Map = {};
  // const str2Map = {};

  // for (let char of str1) {
  //   str1Map[char] = str1Map[char] + 1 || 1;
  // }

  // for (let char of str2) {
  //   str2Map[char] = str2Map[char] + 1 || 1;
  // }

  // let isAnagram = true;
  // for (let i in str1Map) {
  //   if (!str2Map[i] || str2Map[i] !== str1Map[i]) {
  //     isAnagram = false;
  //   }
  // }

  // return isAnagram;
}

module.exports = anagrams;
