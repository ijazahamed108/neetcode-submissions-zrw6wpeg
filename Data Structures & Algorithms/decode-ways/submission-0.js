class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {

      if(s[0] === "0") return 0;

      let prev1=1;
      let prev2=1;

      for (let i=1;i<s.length;i++){
        let current = 0;
        let oneDigit = Number(s[i]);
        let twoDigits = Number(s.slice(i-1, i+1));
        if(oneDigit >=1 && oneDigit<=9) current +=prev1;
        if(twoDigits >=10 && twoDigits<=26) current +=prev2;
        prev2=prev1;
        prev1=current;
      }
      return prev1;
    }
}
