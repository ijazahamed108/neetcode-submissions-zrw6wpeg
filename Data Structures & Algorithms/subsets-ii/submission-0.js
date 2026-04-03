class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {

        let result = [];
        nums = nums.sort((a,b)=> a-b);
        //[1,1,2,3,3]
        //sorting so that duplicates lie adjacently and can be skipped
        function backtrack(start, path){
            result.push([...path]);
            for(let i=start;i<nums.length;i++){
                if( i > start && nums[i] === nums[i-1]) continue;
                path.push(nums[i]);
                backtrack(i+1, path);
                path.pop();
            }

        }

        backtrack(0,[]);
        return result;
    }
}
