class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let maxProfit = 0;
       let minProfit = prices[0];
       for (let i=1; i<prices.length;i++){
        const currentProfit = prices[i] - minProfit;
        maxProfit = Math.max(currentProfit, maxProfit);
        minProfit = Math.min(prices[i], minProfit)
       }
       return maxProfit;
    }
}
