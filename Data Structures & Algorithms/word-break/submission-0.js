class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
      const n= s.length;
      const dp = new Array(n+1).fill(false);
      const wordSet = new Set(wordDict);
      dp[n]=true;

      for(let i=n-1;i>=0;i--){
        for(let j=i+1;j<=n;j++){
           // If s[i..j-1] is a word AND the rest s[j..] is segmentable
          if(wordSet.has(s.slice(i,j)) && dp[j]){
            dp[i]=true;
            break;
          }
        }
      }
      return dp[0];
    }
}
