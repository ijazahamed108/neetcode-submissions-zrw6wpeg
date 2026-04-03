class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for (let i=0;i<nums.length;i++){
            map[nums[i]] = i;
        }
        console.log(map);
        for (let i=0; i<nums.length; i++){
            const balance  = target - nums[i];
            console.log(balance);
            if (map[balance] !== undefined && map[balance] !== i) {
                console.log(i, map[balance] )
                return [i, map[balance]]
            }
        }
    }
}
