const findMedianSortedArrays = require("./solution");

describe("Median of Two Sorted Arrays - Basic Scenarios", () => {
  test("Example 1: nums1 = [1,3], nums2 = [2] -> 2.0", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
  });

  test("Example 2: nums1 = [1,2], nums2 = [3,4] -> 2.5", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test("Example 3: nums1 = [0,0], nums2 = [0,0] -> 0.0", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0.0);
  });

  test("Example 4: Empty array handle -> 2.0", () => {
    expect(findMedianSortedArrays([], [2])).toBe(2.0);
  });
});

describe("Median of Two Sorted Arrays - Advanced Scenarios (Binary Search focus)", () => {
  test("Should move partition to the RIGHT (low = partitionX + 1)", () => {
    const nums1 = [1, 2];
    const nums2 = [3, 4, 5, 6, 7, 8, 9, 10];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(5.5);
  });

  test("Should move partition to the LEFT (high = partitionX - 1)", () => {
    const nums1 = [100, 101];
    const nums2 = [1, 2, 3, 4, 5, 6, 7];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(5);
  });

  test("Should handle disparate sizes and odd total", () => {
    const nums1 = [1, 3, 8, 9, 15];
    const nums2 = [7, 11, 18, 19, 21, 25];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(11);
  });

  test("Should handle disparate sizes and even total with multiple overlaps", () => {
    const nums1 = [23, 26, 31, 35];
    const nums2 = [3, 5, 7, 9, 11, 16];
    expect(findMedianSortedArrays(nums1, nums2)).toBe(13.5);
  });
});
