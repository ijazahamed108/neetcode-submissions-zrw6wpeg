class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let maxRepeatedChar = 0;
        let maxLength = 0;
        let leftPointer = 0;
        let map = new Map();

        for (let rightPointer=0; rightPointer<s.length; rightPointer++){
            let currentChar = s[rightPointer];
            map.set(currentChar, (map.get(currentChar) || 0)+1);
            maxRepeatedChar = Math.max(maxRepeatedChar, map.get(currentChar));

            if((rightPointer - leftPointer + 1) - maxRepeatedChar > k){
                map.set(s[leftPointer], map.get(s[leftPointer])-1 );
                leftPointer++;
            }
            maxLength  = Math.max(maxLength, rightPointer-leftPointer+1);
        }
        return maxLength;
    }
}
