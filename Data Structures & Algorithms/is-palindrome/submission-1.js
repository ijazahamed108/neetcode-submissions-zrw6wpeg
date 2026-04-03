class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length-1;

        // iterate over string until left < right
        while (left < right){

            while (left < right && !this.isAplhaNumeric(s[left])){
                left++;
            }
            while (left < right && !this.isAplhaNumeric(s[right])){
                right--;
            }
            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;


    }

    isAplhaNumeric(c){

        return ( c>='a' && c<= "z" ||
                 c>="A" && c<="Z" ||
                 c >= "0" && c <= "9"   
                )
    }
}
