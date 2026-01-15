const lengthOfLongestSubstring = require("./solution");

describe("Longest Substring Without Repeating Characters", () => {
  test("should handle basic string with repeating characters: 'abcabcbb' -> 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3); // "abc"
  });

  test("should handle string with all same characters: 'bbbbb' -> 1", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1); // "b"
  });

  test("should handle substring in the middle: 'pwwkew' -> 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3); // "wke"
  });

  test("should handle empty string: '' -> 0", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
});
