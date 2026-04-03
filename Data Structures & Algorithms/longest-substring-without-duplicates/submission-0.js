class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        let left = 0;
        let maxLength = 0;
        let map = new Map();
        for (let right =0; right<n; right++){
                const currentCharacter = s[right];
                if(map.has(currentCharacter)){
                    left = Math.max(left, map.get(currentCharacter)+1)
                }
                map.set(currentCharacter, right);
                maxLength = Math.max(maxLength, right-left+1);
        }
        return maxLength;
    }
}
