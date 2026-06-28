class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

      const n = nums.length;
  // dp[i] = length of the LIS ending exactly at index i
  const dp = new Array(n).fill(1);   // each element alone is length 1
  let max = 1;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {       // can append nums[i] after nums[j]
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
    }
}
