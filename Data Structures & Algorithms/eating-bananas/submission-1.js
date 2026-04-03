class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;  // minimum speed to eat 
        let right = Math.max(...piles);  // max speed to eat

        while (left < right){

            let mid = Math.floor((left+right)/2);

            let hours = 0;
            for (let pile of piles ){
                hours += Math.floor((mid+pile-1)/mid);
            }
            if(hours<=h){
                right = mid
            } else {
                left = mid+1;
            }
        }
        return left;
    }
}
