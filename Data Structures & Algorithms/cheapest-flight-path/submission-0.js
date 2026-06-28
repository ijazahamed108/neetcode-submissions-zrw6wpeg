class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
            // prices[i] = cheapest known cost to reach airport i so far
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;
        // Relax all edges k+1 times (at most k stops => at most k+1 edges)
        for (let i = 0; i <= k; i++) {
          // Use a SNAPSHOT so each round only adds ONE more flight,
          // preventing a multi-hop path from forming within a single round.
          const temp = [...prices];
          for (const [from, to, price] of flights) {
            if (prices[from] === Infinity) continue;     // can't depart yet
            if (prices[from] + price < temp[to]) {
              temp[to] = prices[from] + price;           // cheaper arrival found
            }
          }
          prices = temp;
        }
        return prices[dst] === Infinity ? -1 : prices[dst];
          }
}
