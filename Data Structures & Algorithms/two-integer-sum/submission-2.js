class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i=0; i<nums.length; i++){
            const balance  = target - nums[i];
            if(map.has(balance)){
                return [map.get(balance), i]
            }
            map.set(nums[i], i)
        }
    }
}
