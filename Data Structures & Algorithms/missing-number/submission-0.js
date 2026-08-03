class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let sumofn = (n*(n+1))/2;
        let arrSum = nums.reduce((i,x)=>i+x,0);
        return sumofn - arrSum
    }
}
