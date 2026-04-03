class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n=prices.length;
        let maxProfit = 0;
        let minProfit = prices[0] // minPrice seen so far

        for (let i=1; i<n;i++){
            const currentProfit = prices[i] - minProfit;
            maxProfit = Math.max(maxProfit, currentProfit);
            minProfit  = Math.min(prices[i], minProfit);
        }
        return maxProfit;
    }
}
