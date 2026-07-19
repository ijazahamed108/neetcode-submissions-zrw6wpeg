class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if(intervals.length <=1) return 0;
        let removalCount =0;
        intervals.sort((a,b)=> a[1]-b[1]);
        let prevEnd = intervals[0][1];
        for(let i=1;i<intervals.length;i++){
            let currentInterval = intervals[i];
            if(currentInterval[0] < prevEnd){
                removalCount++;
            }else {
                prevEnd = currentInterval[1];
            }
        }
        return removalCount;
    }
}
