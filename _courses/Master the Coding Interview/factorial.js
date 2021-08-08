// O(n)
function findFactorialRecursive(number) {
  if (number === 2) return 2; // 2! = 2 and 1! = 1 so we can use the shortcut of returning as soon as 2 is hit
  return number * findFactorialRecursive(number - 1);
}

findFactorialRecursive(3); // 3 * 2 * 1 = 6
