class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b); // sort array first
        let tripletPairs = [];
        for (let x=0; x< nums.length-2; x++){
            if(x>0 && nums[x] === nums[x-1]) continue;
            let left = x+1;
            let right = nums.length -1;
            while (left < right){
                const sum = nums[x] + nums[left] + nums[right];
                if(sum===0){
                    tripletPairs.push([nums[x], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left+1]) left++;
                    while(left < right && nums[right] === nums[right+1]) right--;
                    left++;
                    right--;
                } else if (sum < 0){
                    left++;
                } else {
                    right--;
                }
            }
        }
        return tripletPairs;
    }
}
