// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// Explanation:
// `fast` starts off n spaces from the begining of the list
// `slow` starts off at the begining
// after that both will advance by 1 space at a time
// when loop ends `slow` will hold the n spaces value from the end
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getAt(n);

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
