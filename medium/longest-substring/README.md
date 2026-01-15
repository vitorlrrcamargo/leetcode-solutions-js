# Longest Substring Without Repeating Characters (Medium)

## 📝 Problem Description

Given a string `s`, find the length of the **longest substring** without repeating characters.

**Example:**

- Input: `s = "abcabcbb"`
- Output: `3`
- Explanation: The answer is "abc", with the length of 3.

## 💡 Algorithm: Sliding Window

To solve this efficiently, I implemented the **Sliding Window** pattern using a `Map` to track character indices.

1. **Window Definition:** We use two pointers, `start` and `end`, to represent the current substring window.
2. **HashMap Tracking:** As we move the `end` pointer, we store the last seen index of each character.
3. **Collision Handling:** If we encounter a character that is already in our Map (within the current window), we jump the `start` pointer to the position right after the previous occurrence of that character.
4. **Max Calculation:** At each step, we calculate the current window size (`end - start + 1`) and update our `maxLength`.

## 📊 Complexity Analysis

- **Time Complexity:** $O(n)$ — We iterate through the string of length $n$ exactly once.
- **Space Complexity:** $O(\min(m, n))$ — The size of the Map depends on the character set (m) or string length (n).

## 🛠️ Run This Specific Test

Navigate to the root folder and run:

```bash
npm test medium/longest-substring/solution.test.js
```
