class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        let result = [];
        function isPalindrome(left, right, str){

            while(left < right){
                if(str[left]!== str[right]) return false;
                left++;
                right--;
            }
            return true;
        }

        function backtrack(start, path){
            if(s.length === start){
                result.push([...path]);
                return;
            }
            for(let i=start; i<s.length; i++){
                if(isPalindrome(start, i, s)){
                    path.push(s.substring(start, i+1));
                    backtrack(i+1, path);
                    path.pop();
                }
            }

        }
        backtrack(0,[]);
        return result;
    }
}
