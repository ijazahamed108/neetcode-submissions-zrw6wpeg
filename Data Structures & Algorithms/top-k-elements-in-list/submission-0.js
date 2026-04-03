class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {


        //Initialize a frequencyMap 
        let frequencyMap = new Map();
        //initialize buckets of size nums.length+1 and fill with []
        let buckets = Array(nums.length+1).fill(null).map(()=>[]);
        let result = [] // final Result
        //Fill frequncyMap
        for (const num of nums){
            frequencyMap.set (num, (frequencyMap.get(num) || 0)+1)
        }
        // populate buckets from frequencyMap

        for (const [key, value] of frequencyMap){
            buckets[value].push(key)
        }

        // fill in results array by iterating over buckets
        // iterate from end and upto results length k and
        //  keep adding only if bucket has elemnts
        for (let i=buckets.length-1; i>=0 && result.length<k; i--){
            if(buckets[i].length>0){
                result.push(...buckets[i]);
            }
        }
        return result.slice(0,k)
    }
}
