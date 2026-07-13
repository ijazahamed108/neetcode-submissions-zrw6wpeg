class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
       let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;
    
    // We stop before the last element because once we reach or 
    // can pass the last element, we don't need to jump again.
    for (let i = 0; i < nums.length - 1; i++) {
        // Track the furthest index we can reach from the current index
        farthest = Math.max(farthest, i + nums[i]);
        
        // If we reach the end of the range for the current jump
        if (i === currentEnd) {
            jumps++;             // Increment jump count
            currentEnd = farthest; // Set the boundary for the next jump level
            
            // Optimization: If the next boundary already reaches or exceeds the last index, break early
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
}
}
