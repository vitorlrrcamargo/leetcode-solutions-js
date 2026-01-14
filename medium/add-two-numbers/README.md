# Add Two Numbers (Medium)

## 📝 Problem Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

**Example:**

- Input: `l1 = [2, 4, 3]`, `l2 = [5, 6, 4]`
- Output: `[7, 0, 8]`
- Explanation: 342 + 465 = 807.

## 🧠 Understanding ListNode in JavaScript

Unlike Arrays, JavaScript does not have a built-in Linked List data structure. In this challenge, we use a custom `ListNode` class (or constructor function).

### How it works:

A **Linked List** is a linear collection of data elements called nodes. Each node has two parts:

1. **Value (`val`):** The data stored in the node (in this case, a single digit).
2. **Next (`next`):** A reference (pointer) to the next node in the sequence, or `null` if it's the last node.

```javascript
// Example of a ListNode structure:
{
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}
```

## 💡 Algorithm: Elementary Math (Carry)

The solution simulates column-wise addition just like we do by hand.

1. **Dummy Head:** We use a `dummyHead` to simplify the construction of the result list.
2. **Carry Logic:** Since each node can only hold one digit (0-9), if the sum exceeds 9, we store the tens digit in a `carry` variable for the next iteration.
3. **Iteration:** We traverse both lists simultaneously. If one list is shorter, we treat its values as `0`.
4. **Final Carry:** If a carry remains after both lists are exhausted, we append a final node with that value.

## 📊 Complexity Analysis

- **Time Complexity:** $O(\max(m, n))$ — Where $m$ and $n$ are the lengths of the two lists. We traverse them at most once.
- **Space Complexity:** $O(\max(m, n))$ — The length of the new list is at most $\max(m, n) + 1$.

## 🛠️ Run This Specific Test

Navigate to the root folder and run:

```bash
npm test medium/add-two-numbers/solution.test.js
```
