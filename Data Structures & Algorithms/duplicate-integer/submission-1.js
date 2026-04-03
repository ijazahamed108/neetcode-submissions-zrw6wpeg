class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        for (let i=0; i<nums.length; i++){
            if(map[nums[i]]){
                map[nums[i]] = map[nums[i]]+1;

            } else {
                map[nums[i]]=1;
            }
        }
        console.log(map)
        for ( let [key, value] of Object.entries(map)){
            console.log(value)
            if(value > 1){
                return true;
            } 
        }
        return false;

    }
}
