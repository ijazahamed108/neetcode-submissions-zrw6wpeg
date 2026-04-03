class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the array
        nums.sort( (a,b)=> a-b);
        let results = [];
        // 3 sum = a+b+c , let start with as first element
        // we need b,c this means iterate only upto n-2;
        for (let i=0; i<nums.length-2;i++){
            // starting elemnt and its next element should not be equal
            // since we need to skip duplicates
            // i = 0, next i=1 means i=1 and i=0 should not be equal
            if(i>0 && nums[i] === nums[i-1]) continue;
            let left = i+1;
            let right = nums.length-1;
            while (left < right){
                const sum = nums[i]+nums[left]+nums[right];
                if(sum === 0){
                    results.push([nums[i], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right-1]) right--;
                left++;
                right--;
                } else if (sum < 0){
                    left++;
                } else {
                    right--;
                }
                
            }
        }
        return results;
    }
}
