class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Use two pointers left, right;
        // calculate area at each step area = minheight*width;
        // width = rightpointer - leftPointer;
        // min height is minimum of hrights of left and heights of right
        // update maxArea with area by taking max of both;
        // update pointers if hieght of left is less than height of right
        // left++ else rightPointer ++


        let left =0;
        let right = heights.length-1;
        let maxArea =0;

        while (left < right){
            let width = right -left;
            let minHeight = Math.min(heights[left], heights[right]);
            let area = width*minHeight;
            maxArea = Math.max(area, maxArea);
            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }
        return maxArea;

    }
}
