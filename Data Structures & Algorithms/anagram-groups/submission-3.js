class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map();

    for (const word of strs) {

        const count = new Array(26).fill(0);

        for (const ch of word) {
            count[ch.charCodeAt(0) - 97]++;
        }

        const key = count.join("#");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return [...map.values()];
    }
}
