// Divide and conquer aka Binary search

// Recursive solution - O(n log n)
function arrayContains(arr, val) {
  const midPoint = Math.floor(arr.length / 2);

  // Not found and it's the end of the line
  if (midPoint === 0 && arr[0] !== val) {
    return -1;
  }

  // Found
  if (arr[midPoint] === val) {
    return arr[midPoint];
  }
  // First half
  else if (arr[midPoint] > val) {
    return binarySearch(arr.slice(0, midPoint));
  }
  // Second half
  else if (arr[midPoint] < val) {
    return binarySearch(arr.slice(midPoint));
  }

  return arrayContains(arr, val);
}

arrayContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8); // Takes 2 iterations

//*-------------------------- vs --------------------------*//

// Brute force approach - (On)
function arrayContains(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    console.log("iteration: ", i + 1);

    if (arr[i] === val) {
      return true;
    }
  }

  return false;
}

arrayContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7); // Takes 8 iterations
