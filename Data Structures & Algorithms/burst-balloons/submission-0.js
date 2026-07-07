class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        let n = nums.length;
        // adjust boundaries 
        nums = [1,...nums,1];
        // dp[left][right] = max coins from bursting all balloons
        // strictly between index left and right (exclusive)
        const dp = Array.from({length:n+2}, ()=>Array(n+2).fill(0));
        for(let len = 1; len<=n; len++){
            for(let left=0; left+len+1 <= n+1; left++){
                const right = left + len + 1;
                 // Try each balloon k as the LAST one to burst in (left, right)
                 for(let k=left+1;k<right;k++){
                    const coins = nums[left]*nums[k]*nums[right]+dp[left][k]+dp[k][right];
                    dp[left][right] = Math.max(dp[left][right], coins);
                 }
            }
        }
        return dp[0][n+1]
    }
}
