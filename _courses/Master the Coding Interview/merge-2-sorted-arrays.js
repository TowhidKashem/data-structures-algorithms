function mergeSortedArrays(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;

  if (!arr1.length) {
    return arr2;
  } else if (!arr2.length) {
    return arr1;
  }

  const merged = [];
  const larger = arr1.length > arr2.length ? arr1 : arr2;
  const smaller = arr1.length < arr2.length ? arr1 : arr2;
  const smallerMaxIndex = smaller.length - 1;

  larger.forEach((num, index) => {
    if (index > smallerMaxIndex) {
      merged.push(num);
    } else {
      if (num < smaller[index]) {
        merged.push(num, smaller[index]);
      } else {
        merged.push(smaller[index], num);
      }
    }
  });

  return merged;
}

mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30, 100]); // [0, 3, 3, 4, 4, 6, 30, 31, 100] - O(n)
