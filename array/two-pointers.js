// Return the indices of the 2 numbers that add up to the target
const twoSum = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;

  while (numbers[start] + numbers[end] !== target) {
    if (numbers[start] + numbers[end] < target) {
      start++;
    } else {
      end--;
    }
  }

  return [start, end];
};

console.log([2, 7, 11, 15], 9); // [0, 1]
