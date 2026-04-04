class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n = s.length;
    if(n < 2) return s;

    let start = 0;
    let maxlength = 1;

    const expandAroundCenter = (left, right) =>{
        while(left>=0 && right< n && s[left] === s[right]){
            left--;
            right++;
        }
        const length = right-left-1;
        if(length > maxlength){
            maxlength = length;
            start = left+1;
        }
    }

    for(let i=0;i<n;i++){
        expandAroundCenter(i,i);  //odd length
        expandAroundCenter(i, i+1) // even length
    }

    return s.substring(start, start+maxlength);
    }
}
