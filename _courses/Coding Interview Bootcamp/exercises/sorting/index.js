// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const cur = arr[j];
      const next = arr[j + 1];

      if (cur > next) {
        arr[j] = next;
        arr[j + 1] = cur;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; // Assume this is the minimum

    for (let j = i + 1; j < arr.length; j++) {
      // Test assumption
      // If this val is smaller than the assumed min then swap values
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  const len = arr.length;

  if (len === 1) {
    return arr;
  }

  const center = Math.floor(len / 2);

  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    let lesser;
    if (left[0] < right[0]) {
      lesser = left.shift();
    } else {
      lesser = right.shift();
    }

    results.push(lesser);
  }

  // Stick whatever is left in either array to the end of the results
  // Remember both "left" and "right" arguments are sorted arrays
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
