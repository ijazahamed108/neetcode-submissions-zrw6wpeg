class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n+1).fill(0);
        if(n<=3) return n;

        function climb(steps){
            if(steps<=1) return 1;
            if(dp[steps]){
                return dp[steps]
            } else {
                dp[steps] = climb(steps-1)+climb(steps-2);
            }
            return dp[steps]
        }

        return climb(n);
    }
}
