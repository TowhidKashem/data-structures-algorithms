// O(n)
function firstRecurring(arr) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (hashMap[val]) return val;

    hashMap[val] = true;
  }
  return -1;
}

firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]); // 2
firstRecurring([1, 2, 4, 1]); // 1
firstRecurring([1, 2, 4]); // -1
