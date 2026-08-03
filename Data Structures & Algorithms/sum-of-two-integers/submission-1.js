class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
       while (b !== 0) {
        // Find the carry bits and shift them one position to the left
        let carry = (a & b) << 1;
        
        // Add the bits without the carry
        a = a ^ b;
        
        // Assign the carry to b for the next iteration
        b = carry;
    }
    
    return a;
    }
}
