class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n= nums.length;
        let final = [];
        // Calculate the product of left side of element
        let leftSideProduct = 1;
        for (let i=0;i<n;i++){
            final[i] = leftSideProduct;  // for initial ele there will be no left, so assign it as is
            leftSideProduct *= nums[i];  
        }
        // Right half iterate from the end of array
            let rightSideProduct = 1;
        for (let i =n-1;i>=0;i--){
            final[i] = final[i]*rightSideProduct;
            rightSideProduct *= nums[i]
        }
        return final;
    }
}
