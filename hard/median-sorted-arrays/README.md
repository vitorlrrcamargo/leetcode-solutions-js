# Median of Two Sorted Arrays (Hard)

## 📝 Problem Description

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.
The overall run time complexity should be **$O(\log(m+n))$**.

**Example:**

- Input: `nums1 = [1, 2], nums2 = [3, 4]`
- Output: `2.5`
- Explanation: Merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5.

## 💡 Algorithm: Binary Search on Partitions

While the intuitive approach is to merge and sort, that results in $O((m+n) \log(m+n))$. To achieve $O(\log(m+n))$, we use **Binary Search**.

1. **Partitioning:** We split both arrays into two halves such that the left side contains the same number of elements as the right side.
2. **Binary Search:** We perform binary search on the smaller array to find an index `i` such that all elements to its left are smaller than all elements to the right in both arrays.
3. **Edge Cases:** We use `-Infinity` and `Infinity` to handle partitions that fall outside array boundaries.

## 📊 Complexity Analysis

- **Time Complexity:** $O(\log(\min(m, n)))$ — We perform binary search only on the smaller array.
- **Space Complexity:** $O(1)$ — We do not create a new merged array, saving memory.

## 🛠️ Run This Specific Test

```bash
npm test hard/median-sorted-arrays/solution.test.js
```
