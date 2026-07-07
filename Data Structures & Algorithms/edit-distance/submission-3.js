class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const m = word1.length;
        const n = word2.length;
    
    // Create a 2D DP array initialized with 0
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    // Base case: converting word1 to an empty string (Deletions)
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    
    // Base case: converting an empty string to word2 (Insertions)
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }
    
    // Fill the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // Characters match, no new operation needed
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Characters mismatch, choose the minimum operation + 1
                dp[i][j] = Math.min(
                    dp[i - 1][j],    // Deletion
                    dp[i][j - 1],    // Insertion
                    dp[i - 1][j - 1] // Replacement
                ) + 1;
            }
        }
    }
    
    return dp[m][n];
    }
}
//O(m*n)
//O(n) 1D, O(m*n) 2D