/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
      if (!intervals || intervals.length === 0) return 0;

        // 1. Map to start/end properties instead of array indices
        const starts = intervals.map(i => i.start).sort((a, b) => a - b);
        const ends = intervals.map(i => i.end).sort((a, b) => a - b);

        let startPointer = 0;
        let endPointer = 0;
        let roomsUsed = 0;
        let maxRooms = 0;

        // 2. Scan through the timeline
        while (startPointer < intervals.length) {
            if (starts[startPointer] < ends[endPointer]) {
                roomsUsed++;
                startPointer++;
            } else {
                roomsUsed--;
                endPointer++;
            }
            maxRooms = Math.max(maxRooms, roomsUsed);
        }

        return maxRooms;
    }
}
