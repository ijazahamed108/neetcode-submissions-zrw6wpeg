class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        // 1. Quick check: If the total number of cards isn't divisible by the group size, it's impossible.
    if (hand.length % groupSize !== 0) {
        return false;
    }

    // 2. Count the frequencies of each card using a Map.
    const cardCounts = new Map();
    for (const card of hand) {
        cardCounts.set(card, (cardCounts.get(card) || 0) + 1);
    }

    // 3. Sort the unique cards in ascending order.
    const uniqueCards = Array.from(cardCounts.keys()).sort((a, b) => a - b);

    // 4. Iterate through each unique card and try to form consecutive groups.
    for (const card of uniqueCards) {
        const count = cardCounts.get(card);
        
        // If this card has already been completely used in previous groups, skip it.
        if (count > 0) {
            // Try to form a sequence of consecutive cards of length 'groupSize'.
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i;
                const currentCount = cardCounts.get(currentCard) || 0;
                
                // If there are not enough cards to satisfy the required group count, fail.
                if (currentCount < count) {
                    return false;
                }
                
                // Deduct the cards used to form the groups.
                cardCounts.set(currentCard, currentCount - count);
            }
        }
    }

    return true;
    }
}
