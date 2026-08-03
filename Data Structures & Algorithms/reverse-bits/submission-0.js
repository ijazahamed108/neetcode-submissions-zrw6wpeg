class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;

        for (let i = 0; i < 32; i++) {
            // Shift result left to make room
            result <<= 1;

            // Copy the last bit of n
            result |= (n & 1);

            // Unsigned right shift n
            n >>>= 1;
        }

        // Convert to unsigned 32-bit integer
        return result >>> 0;
    }
}
