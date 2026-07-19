class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let [start, end] = newInterval;
        let left = [];
        let right = [];

        for (let interval of intervals){
            if(interval[1] < start){
                left.push(interval)
            } else if(interval[0]>end){
                right.push(interval)
            } else {
                start = Math.min(start, interval[0]);
                end = Math.max(end, interval[1]);
            }
        }
        return [...left, [start, end], ...right]
    }
}
