class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n= nums.length;
        let ans = [];
        let left=0;
        let right = k;
        if(n<k) return [];
        while (right <= nums.length){
            let currmax = Math.max(...nums.slice(left, right));
            ans.push(currmax);
            left++;
            right++;
        }
        return ans;
    }
}
