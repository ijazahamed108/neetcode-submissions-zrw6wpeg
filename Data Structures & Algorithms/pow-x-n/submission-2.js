class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
       if (x === 0) return 0;
    if (n === 0) return 1;

    // Handle negative exponents
    let power = n;
    if (power < 0) {
        x = 1 / x;
        power = -power;
    }

    let result = 1;
    let currentProduct = x;

    while (power > 0) {
        // If power is odd, multiply the result by current product
        if (power % 2 === 1) {
            result *= currentProduct;
        }
        // Square the base and halve the power
        currentProduct *= currentProduct;
        power = Math.floor(power / 2);
    }

    return result;
}
}
