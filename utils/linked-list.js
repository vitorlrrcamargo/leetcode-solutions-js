function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

module.exports = {
  ListNode,
  arrayToLinkedList,
  linkedListToArray,
};
