class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let res = nums[0];
        for(let i=1;i<nums.length;i++){
            res = res^nums[i];
        }
        return res;
    }
}
