const addTwoNumbers = require("./solution");
const {
  arrayToLinkedList,
  linkedListToArray,
} = require("../../utils/linked-list");

describe("Add Two Numbers (Linked List)", () => {
  test("should add two numbers of the same length: [2,4,3] + [5,6,4] = [7,0,8]", () => {
    const l1 = arrayToLinkedList([2, 4, 3]);
    const l2 = arrayToLinkedList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 0, 8]);
  });

  test("should handle lists of different lengths: [0] + [7,3] = [7,3]", () => {
    const l1 = arrayToLinkedList([0]);
    const l2 = arrayToLinkedList([7, 3]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([7, 3]);
  });

  test("should handle a carry-over at the very end: [9,9] + [1] = [0,0,1]", () => {
    const l1 = arrayToLinkedList([9, 9]);
    const l2 = arrayToLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 0, 1]);
  });

  test("should work with lists of different sizes and multiple carries: [9,9,9] + [1] = [0,0,0,1]", () => {
    const l1 = arrayToLinkedList([9, 9, 9]);
    const l2 = arrayToLinkedList([1]);
    const result = addTwoNumbers(l1, l2);
    expect(linkedListToArray(result)).toEqual([0, 0, 0, 1]);
  });
});
