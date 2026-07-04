class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
       let buy:number = -prices[0];
       let sell:number = 0;
       let prevSell:number =0;
       for(let i=1;i<prices.length;i++){
        const OldSell:number = sell;
        sell = Math.max(sell, prices[i]+buy);
        buy = Math.max(buy, prevSell-prices[i]);
        prevSell = OldSell;
       }
       return sell;

    }
}
