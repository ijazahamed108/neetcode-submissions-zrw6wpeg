class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
         const memo = {};

        const dfs = (i, j) => {
            const key = `${i}-${j}`;
            if (s1.length + s2.length !== s3.length) {
                return false;
            } else if (i === s1.length && j === s2.length) {
                return true;
            } else if (key in memo) {
                return memo[key];
            }

            let match1 = false, match2 = false;
            if (i < s1.length && s1[i] === s3[i + j]) {
                match1 = dfs(i + 1, j);
            } 
            if (j < s2.length && s2[j] === s3[i + j]) {
                match2 = dfs(i, j + 1);
            }

            memo[key] = match1 || match2;
            return memo[key];
        }

        return dfs(0, 0);
    }
}
// Time:  O(m × n)
// Space: O(n)