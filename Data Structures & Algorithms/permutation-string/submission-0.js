class Solution {
    /**
     * @param {string} s1
     * @param {string} s2 
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
    const map = new Map();
    // Build frequency map for s1
    for (let ch of s1) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let needed = s1.length; 
    
    while (right < s2.length) {
        let ch = s2[right];
        if (map.has(ch)) {
            if (map.get(ch) > 0) {
                needed--;
            }
            map.set(ch, map.get(ch) - 1);
        }
        right++;
        if (needed === 0) return true;
        // Keep window size fixed
        if (right - left === s1.length) {
            let leftChar = s2[left];
            if (map.has(leftChar)) {
                if (map.get(leftChar) >= 0) {
                    needed++;
                }
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }
    }

    return false;

    }
}
