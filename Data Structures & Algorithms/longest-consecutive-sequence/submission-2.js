class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // create a set from nums to avoid duplicates
        const uniqueElements = new Set(nums);

        // initialize longest = 0;
        let longest =0;
        // iterate over uniqueElements and find the starting point
        // if x, is curr number of nums, it is starting if 
        // x-1 is not present in unique elemnts set

        for(let num of nums){
            if(!uniqueElements.has(num-1)){
                let currentLongest = 1;
                // if there is any elemnet x+1 i.e., num + currentLongest
                // keep incrementing currentLongest
                while ( uniqueElements.has(num+currentLongest)){
                    currentLongest++;
                }
                // update the initial longest with Max values between longest and currentLongest
                longest = Math.max(longest, currentLongest);
            }
        }
        return longest;
    }
}
