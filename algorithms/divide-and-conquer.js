// Divide and conquer + recursive solution
function arrayContains(arr, val, iteration = 1) {
  console.log("iteration: ", iteration);

  const center = Math.floor(arr.length / 2);

  const left = arr.slice(0, center);
  const right = arr.slice(center);

  // During the last split one half will have 1 value and the other will have either 1 or 2 values
  // depending on whether the original array has an even or odd number of items
  // but as long as one of the halves has 1 item in it we know it's the end and we can't split the array any further
  if (left.length === 1 || right.length === 1) {
    // We don't know which half has 1 or possibly 2 values so we check all these indices
    // if the value is `undefined` it will just evaluate to false so no big deal
    if (
      left[0] === val ||
      left[1] === val ||
      right[0] === val ||
      right[1] === val
    ) {
      // Found!
      return true;
    } else {
      // Not found
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

// Traditional way (On)
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
