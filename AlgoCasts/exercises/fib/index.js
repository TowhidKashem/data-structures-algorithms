// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const result = [0, 1];
//   for (let i = 0; i < n - 1; i++) {
//     result.push(result[result.length - 2] + result[result.length - 1]);
//   }
//   return result.pop();
// }

// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

const memo = {};
function fib(n) {
  if (n < 2) return n;

  const arg1 = n - 1;
  const arg2 = n - 2;

  let result1;
  if (memo[arg1]) {
    result1 = memo[arg1];
  } else {
    result1 = fib(arg1);
    memo[arg1] = result1;
  }

  let result2;
  if (memo[arg2]) {
    result2 = memo[arg2];
  } else {
    result2 = fib(arg2);
    memo[arg2] = result2;
  }

  return result1 + result2;
}

module.exports = fib;
