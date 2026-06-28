class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
       const n = s.length;
  const wordSet = new Set(wordDict);
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;                         // empty prefix is segmentable
  for (let i = 1; i <= n; i++) {        // end of prefix
    for (let j = 0; j < i; j++) {       // split point
      // prefix s[0..j-1] segmentable AND s[j..i-1] is a word
      if (dp[j] && wordSet.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];             
  }
}
