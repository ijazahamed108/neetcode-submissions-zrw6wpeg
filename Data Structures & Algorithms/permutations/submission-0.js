class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let visited = new Array(nums.length).fill(false)

        function backtrack(path){
            if(path.length === nums.length){
                result.push([...path]);
                return
            }
            for(let i=0;i<nums.length;i++){

                if(visited[i]) continue;

                visited[i]=true;
                path.push(nums[i]);

                backtrack(path);

                path.pop();
                visited[i]=false;
            }
        }
        backtrack([]);
        return result;
    }
}
