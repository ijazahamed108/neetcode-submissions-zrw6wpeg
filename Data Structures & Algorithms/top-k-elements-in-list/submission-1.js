class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {


    const frequencyMap = new Map();
    // Create buckets where index represents the frequency
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    const result = [];

    // 1. Populate the frequency map
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // 2. Group elements into buckets by their frequency
    for (const [num, freq] of frequencyMap.entries()) {
        buckets[freq].push(num);
    }

    // 3. Iterate backwards from highest frequency bucket to collect k elements
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }

    return result;
    }
}
