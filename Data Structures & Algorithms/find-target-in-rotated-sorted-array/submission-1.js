class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

       let left =0;
       let right = nums.length-1;
    //modified binary search
    // divide array one of them is sorted- intuition
       while (left <= right){

        let mid = Math.floor((left+right)/2);
        if(nums[mid] ===target) return mid;

        // This means sorted Half
        if(nums[left] <= nums[mid]){

            if(target >= nums[left] && target < nums[mid]){
                    right = mid-1;
            } else {
                left = mid+1;
            }
        } else {

            if(target > nums[mid] && target <=nums[right]){
                left = mid+1;
            } else {
                right = mid-1;
            }
        }
       }
       return -1;
    }
}
