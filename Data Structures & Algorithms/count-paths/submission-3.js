class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
    let dp = new Array(n).fill(1);
    // for(let row =m-2; row>=0;row--){
    //   for (let col = n-2;col>=0;col--){
    //     dp[col] = dp[col]+dp[col+1]
    //   }
    // }
    // return dp[0]
    for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[col] = dp[col] + dp[col - 1];
    }
  }
  return dp[n - 1];
    }
}
