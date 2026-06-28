class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
     // dp[length - 1] = the smallest possible tail value
  // among all increasing subsequences of that `length`.
  const dp = [];
  for (const currentNum of nums) {
    // Binary search for the leftmost tail that is >= currentNum.
    let left = 0;
    let right = dp.length;
    while (left < right) {
      const middle = (left + right) >> 1;
      if (dp[middle] < currentNum) {
        left = middle + 1;        // tail too small, search right half
      } else {
        right = middle;           // candidate found, keep searching left
      }
    }
    const insertPosition = left;
    if (insertPosition === dp.length) {
      dp.push(currentNum);          // currentNum extends the LIS
    } else {
      dp[insertPosition] = currentNum; // replace to keep tail small
    }
  }
  return dp.length;   // length of LIS

    }
}
