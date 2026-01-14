# Two Sum (Easy)

## 📝 Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

- Input: `nums = [2, 7, 11, 15]`, `target = 9`
- Output: `[0, 1]`

## 💡 Algorithm: One-Pass Hash Map

To solve this efficiently, I used a **Hash Map** strategy. This approach is superior to a nested loop (brute force) because it reduces the time complexity significantly.

1. **Calculate Complement:** For each number in the array, we calculate the `complement` (`target - currentNumber`).
2. **Lookup:** We check if this `complement` already exists in our Map.
3. **Return or Store:** - If it exists, we found our pair and return their indices.
   - If it doesn't, we store the current number and its index in the Map for future lookups.

## 📊 Complexity Analysis

- **Time Complexity:** $O(n)$ — We traverse the list containing $n$ elements only once.
- **Space Complexity:** $O(n)$ — The extra space required depends on the number of items stored in the hash table.

## 🛠️ Run This Specific Test

Navigate to the root folder and run:

```bash
npm test easy/two-sum/solution.test.js
```
