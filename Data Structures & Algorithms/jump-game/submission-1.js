class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let target = nums.length-1;

        for(let i=nums.length-1;i>=0;i--){
            if(nums[i]+i >=target){
                target = i;
            }
        }
        return target === 0;

    }
}
