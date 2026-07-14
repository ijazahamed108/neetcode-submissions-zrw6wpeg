class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        // 1. Quick check: If the total number of cards isn't divisible by the group size, it's impossible.
        if(hand.length % groupSize !==0) return false;
        //Create a FrequencyMap
        const map = new Map();
        hand.forEach( num=> {
            map.set(num, (map.get(num) || 0)+1)
        })
        // 3. create and Sort the unique cards in ascending order.
        const uniqueCards = [...new Set(hand)].sort((a, b) => a - b);
        // 4. Iterate through each unique card and try to form consecutive groups.
        for(let i=0;i<uniqueCards.length;i++){
            const count = map.get(uniqueCards[i])
            // If this card has already been completely used in previous groups, skip it.
            if(count > 0){
               //form groups of groupSize
               for(let j=0; j<groupSize;j++){
                let currentCard = uniqueCards[i]+j;
                let currentCount = map.get(currentCard) || 0;
                // If there are not enough cards to satisfy the required group count, fail.
                if(currentCount < count ) return false;
                
                // Deduct the cards used to form the groups.
                map.set(currentCard, currentCount-count);
               }

            }
        }
        return true;
    }
}
