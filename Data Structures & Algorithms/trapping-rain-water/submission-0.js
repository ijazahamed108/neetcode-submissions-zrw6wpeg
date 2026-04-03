class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left=0;
        let right = height.length-1;
        let leftMax = 0;
        let rightMax= 0;

        let sum = 0;

        while(left < right ){
            if (height[left] < height[right]){
                leftMax = Math.max(leftMax, height[left]);
                if(height[left] < leftMax){
                    sum = sum + leftMax -height[left];
                }
                left++;
            } else {
                rightMax = Math.max(height[right], rightMax);
                if(height[right] < rightMax){
                    sum = sum + (rightMax - height[right]);
                }
                right--;

            }
        }
        return sum;
    }
}
