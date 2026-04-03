class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        let n = nums.length;
        if(n===1) return nums[0];
        function robLinear(arr){
            let prevRob=0;
            let maxRob=0;
            for(let curr of arr){
                let temp = Math.max(maxRob, prevRob+curr);
                prevRob = maxRob;
                maxRob = temp;
            }
            return maxRob;
        }
        //since the array is circular first skip the first element of array and fin rob
        // next skip last element of array and find rob finally return max of two
        let case1 = robLinear(nums.slice(1));
        let case2 = robLinear(nums.slice(0, n-1));
        return case1>case2?case1:case2;
    }
}
