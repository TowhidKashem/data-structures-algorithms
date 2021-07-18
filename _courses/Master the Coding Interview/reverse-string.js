function reverseString(str) {
  if (typeof str !== "string") return;

  if (!str.length) return str;

  let reversed = "";
  for (char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

reverseString("abcd"); // dcba - O(n)
