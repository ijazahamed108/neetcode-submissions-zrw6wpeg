class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let prevRob = 0;
        let maxRob = 0;
        for (const curr of nums){
            let temp = Math.max(maxRob, prevRob+curr);
             prevRob = maxRob;
             maxRob = temp
        }
        return maxRob;
    }
}
