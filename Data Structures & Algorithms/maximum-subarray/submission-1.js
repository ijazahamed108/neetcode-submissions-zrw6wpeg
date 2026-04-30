class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max= -Infinity;
        let sum=0;

        for(let i=0; i<nums.length;i++){

            sum = sum+nums[i];
            if(sum<0){
                sum=0;
            } else {
                max = Math.max(max, sum)
            }
        }
        return max <0 ? -1: max;
    }
}
