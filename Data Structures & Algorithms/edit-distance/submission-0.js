class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let m = word1.length;
        let n = word2.length;
        let dp = Array(n+1).fill(0);
         // Base case: converting "" to word2[0..j] needs j inserts
         for (let j=0;j<=n;j++){
            dp[j] = j;
            //first row 1,2,3..n
         }
         for(let i=1;i<=m;i++){
            const current = Array(n+1).fill(0);
            current[0] = i;  // first col in each row
            for(let j=1;j<=n;j++){
                if(word1[i-1] === word2[j-1]){
                    // char match no Ops needed here
                    current[j] = dp[j-1]
                } else {
                    // 1+ min(replace, insert, delete)
                    current[j] = 1+Math.min(dp[j-1], dp[j], current[j-1])
                }
            }
            dp =current;
         }

return dp[n]
    }
}
//O(m*n)
//O(n)