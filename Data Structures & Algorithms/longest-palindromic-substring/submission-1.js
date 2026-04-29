class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let max = "";
        const expandFromCenter = (l,r) =>{
            while(l>=0 && r<s.length && s[l]===s[r]){
                l--;
                r++;
            }
            return s.slice(l+1, r);
        }
      
      for (let i=0;i<s.length;i++){
        const odd = expandFromCenter(i,i);
        max = odd.length > max.length ? odd : max;
        const even = expandFromCenter(i, i+1);
        max = even.length > max.length ? even : max;
        
      }
      return max;
    }
}
