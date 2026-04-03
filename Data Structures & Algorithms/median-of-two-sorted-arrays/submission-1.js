class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        let masterArr = [...nums1, ...nums2].sort((a,b)=>a-b);
        let mid = Math.floor(masterArr.length/2);
        let median;
        if(masterArr.length%2===0){
            median = (masterArr[mid]+masterArr[mid-1])/2;
        } else {
            median = masterArr[mid]
        }
        return median
    }
}
