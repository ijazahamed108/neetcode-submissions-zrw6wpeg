class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
            const MAX = Math.pow(2, 31) - 1;
            const MIN = -Math.pow(2, 31);

            let reversed = Number(
                Math.abs(x)
                    .toString()
                    .split("")
                    .reverse()
                    .join("")
            );

            if (x < 0) reversed *= -1;

            if (reversed < MIN || reversed > MAX) {
                return 0;
            }

            return reversed;
    }
}
