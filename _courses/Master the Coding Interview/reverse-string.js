function reverseString(str) {
  if (typeof str !== "string") {
    throw Error("param provided is either not a string or is empty");
  }

  if (!str.length) return str;

  let reversed = "";
  for (char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

reverseString("abcd"); // dcba - O(n)
