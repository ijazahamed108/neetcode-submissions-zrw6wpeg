class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map();

    for (const word of strs) {

        // Sort characters to create the key
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return [...map.values()];
    }
}
