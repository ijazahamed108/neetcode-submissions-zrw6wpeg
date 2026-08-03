class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
         // Edge case
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    const m = num1.length;
    const n = num2.length;

    // Maximum possible length = m + n
    const result = new Array(m + n).fill(0);

    // Multiply from right to left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            const product =
                Number(num1[i]) * Number(num2[j]);

            const p1 = i + j;
            const p2 = i + j + 1;

            const sum = product + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros
    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
    }
}
