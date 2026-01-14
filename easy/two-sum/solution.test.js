const twoSum = require("./solution");

describe("Two Sum Algorithm", () => {
  test("should return [0, 1] for nums = [2, 7, 11, 15] and target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("should return [1, 2] for nums = [3, 2, 4] and target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("should return [0, 1] for nums = [3, 3] and target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("should return empty array if no solution exists", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
