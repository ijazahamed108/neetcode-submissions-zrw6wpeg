class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let dp = new Map();
        dp.set(0, 1);
        //{ 0: 1 } initially
        for(let number of nums){
            let nextDp = new Map();
            for( let [total, count] of dp){
                nextDp.set( total+number, (nextDp.get(total+number) || 0)+ count);
                nextDp.set( total-number, (nextDp.get(total-number) || 0)+ count);
            }
            dp=nextDp;
        }
        return dp.get(target) || 0;
    }
}
// O(n∗m)
// O(m)