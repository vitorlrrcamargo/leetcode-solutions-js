function twoSum(nums, target) {
  const previousValues = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const complement = target - currentNumber;

    if (previousValues.has(complement)) {
      return [previousValues.get(complement), i];
    }

    previousValues.set(currentNumber, i);
  }

  return [];
}

module.exports = twoSum;
