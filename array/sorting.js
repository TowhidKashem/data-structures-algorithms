// --- Bubble sort:

// O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      const cur = arr[j];
      const next = arr[j + 1];

      // If this value is bigger than the next, swap values
      if (cur > next) {
        arr[j] = next;
        arr[j + 1] = cur;
      }
    }
  }

  return arr;
}

bubbleSort([100, -40, 500, -124, 0, 21, 7]); // [-124, -40, 0, 7, 21, 100, 500]

// --- Selection sort:

// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    // Set the current val as min at the start of each iteration
    let min = val;
    let minIndex = i;
    let shouldSwap = false;

    // If any values after this one is smaller thats now the new min
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
        shouldSwap = true;
      }
    }

    // Swap places with the new min
    if (shouldSwap) {
      arr[i] = arr[minIndex];
      arr[minIndex] = val;
    }
  }

  return arr;
}

// Selection sort is slightly better than bubble sort even though both are O(n^2)
// in selection sort swaps can happen only once per outer loop
// vs bubble sort where swaps can happen once per nested inner loop
selectionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]);
