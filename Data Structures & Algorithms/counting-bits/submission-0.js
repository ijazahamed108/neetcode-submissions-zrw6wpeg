class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = [0]
        for (let i=1;i<=n;i++){
            let count=0;
            let n=i;
            while(n>0){
                n = n & (n-1);
                count++;
            }
            res.push(count)
        }
        return res;
    }
}
