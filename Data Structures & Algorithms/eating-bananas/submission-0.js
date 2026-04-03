class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minSpeed = 1;
        let maxSpeed = Math.max(...piles);

        while(minSpeed < maxSpeed){

            let midSpeed = Math.floor((minSpeed+maxSpeed)/2);
            let hours = 0;
            for (let pile of piles){
                hours = hours + Math.floor((midSpeed+pile-1)/midSpeed)
            }
            if(hours <= h){
                maxSpeed = midSpeed;
            } else {
                minSpeed = midSpeed+1
            }
        }
        return minSpeed
    }
}
