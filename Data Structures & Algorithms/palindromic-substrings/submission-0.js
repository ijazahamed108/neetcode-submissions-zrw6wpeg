class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {

         function expandFromCenter(s, left, right){
            let count=0;
            while(left>=0 && right<s.length && s[left]===s[right]){
                count++
                left--;
                right++;
            }
            return count;
         }

        let count=0;
        for(let i=0;i<s.length;i++){
            
            const oddCount = expandFromCenter(s, i, i);
            const evenCount = expandFromCenter(s,i,i+1);
            count += oddCount+evenCount;
        }
        return count;
    }
}
