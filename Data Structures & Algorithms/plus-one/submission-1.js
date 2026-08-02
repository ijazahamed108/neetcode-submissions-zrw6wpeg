class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        // let str = "";
        // digits.forEach(char=>{
        //     str+=char
        // })
        // let numric = parseInt(str)+1;
        // return numric.toString().split().join();
        let i = digits.length - 1

            while(i >= 0 && digits[i] === 9 ){
                digits[i] = 0;
                i--;
            }

            if( i >= 0){
                digits[i] = digits[i] + 1}
            else{
                digits.unshift(1)
            }
            


            return digits;
        
    }
}
