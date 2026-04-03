class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];

        function generate(open, close, current){
            if(open === 0 && close === 0){
                result.push(current);
                return;
            }
            if(open > 0){
                generate(open-1, close, current+"(")
            }
            if(open < close){
                generate(open, close-1, current+")")
            }

        }
        //initially  there will be n number of open and close pranathesis
        generate(n,n,"");
        return result;
    }
}
