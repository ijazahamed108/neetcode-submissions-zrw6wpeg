class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if(!intervals.length) return [];
        intervals.sort((a,b)=>a[0]-b[0]);
        let merged = [intervals[0]];
        for(let i=1;i<intervals.length;i++){
            let currentInterval = intervals[i];
            let previousInterval = merged[merged.length-1];
            if(currentInterval[0]<=previousInterval[1]){
                previousInterval[1]=Math.max(previousInterval[1],currentInterval[1] )
            } else {
                merged.push(currentInterval)
            }
        }
        return merged
    }
}
