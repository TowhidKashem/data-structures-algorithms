// Divide and conquer + recursive solution
function arrayContains(arr, val, iteration = 1) {
  console.log("iteration: ", iteration);

  const center = Math.floor(arr.length / 2);

  const left = arr.slice(0, center);
  const right = arr.slice(center);

  if (left.length === 1 || right.length === 1) {
    if (
      left[0] === val ||
      left[1] === val ||
      right[0] === val ||
      right[1] === val
    ) {
      return true;
    } else {
      return false;
    }
  }

  const lastVal = left[left.length - 1];

  if (val === lastVal) {
    return true;
  } else if (val < lastVal) {
    arr = left;
  } else {
    arr = right;
  }

  return arrayContains(arr, val, iteration + 1);
}

arrayContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7); // Takes 2 iterations

//*-------------------------- vs. --------------------------*//

// Traditional way (On2)
function arrayContains(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    console.log("iteration: ", i + 1);

    if (arr[i] === val) {
      return true;
    }
  }

  return false;
}

arrayContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7); // Takes 7 iterations
