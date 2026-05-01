class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    getSumOfSquares(n){
        let sumOfSquares=0;
        while(n>0){
        let digit = n % 10;
        sumOfSquares += digit * digit;
        n = Math.floor(n/10);
        }
        return sumOfSquares;

    }
    isHappy(n) {
        let slow=n;
        let fast=n;

        do{
            slow = this.getSumOfSquares(slow);
            fast = this.getSumOfSquares(this.getSumOfSquares(fast));

        } while (slow !==fast)
       return slow === 1
    }
}
