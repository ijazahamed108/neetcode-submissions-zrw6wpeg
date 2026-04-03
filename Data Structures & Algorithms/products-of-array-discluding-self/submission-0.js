class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let n= nums.length;
        let ans = [];
        let leftSideProduct = 1;
        let rightSideProduct = 1;

        for (let i=0; i<n; i++){
            ans[i] = leftSideProduct;
            leftSideProduct = leftSideProduct*nums[i];
        }
        for (let i=n-1; i>=0;i--){
            ans[i] = ans[i]*rightSideProduct;
            rightSideProduct = rightSideProduct *nums[i]
        }
        return ans;
    }
}
