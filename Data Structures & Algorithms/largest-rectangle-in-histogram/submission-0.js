class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0;
        let stack = [];
        heights.push(0);

        for (let i=0; i<heights.length; i++){

            // while stack has length and current element < stack top
            while(stack.length && heights[i] < heights[stack[stack.length-1]]){

                let height = heights[stack.pop()];
                let width = stack.length === 0 ? i : i - stack[stack.length-1] -1;
                maxArea = Math.max(maxArea, height * width);


            }
            stack.push(i);
        }
        return maxArea;
    }
}
