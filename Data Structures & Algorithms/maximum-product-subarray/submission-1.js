class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxSoFar = nums[0];
        let minSoFar = nums[0];
        let result = nums[0];

        for (let i=1;i<nums.length;i++){
            let num = nums[i];
            let tempMax = maxSoFar;
            maxSoFar = Math.max(num, num*maxSoFar, num*minSoFar)
            minSoFar = Math.min(num, num*tempMax, num*minSoFar);
            result  = Math.max(result, maxSoFar)
        }
        return result;
    }
}
