class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let stack = [];

        let map = {

            "*": (a,b) => Number(a)*Number(b),
            "+": (a,b) => Number(a)+Number(b),
            "/": (a,b) => Math.trunc(Number(a)/Number(b)),
            "-": (a,b) => Number(a)-Number(b)
        }
        for (let i=0;i<tokens.length;i++){
            if(map[tokens[i]]){
                let num1 = stack.pop();
                let num2 = stack.pop();
                let newVal = map[tokens[i]](num2,num1) // right -left always
                stack.push(newVal);
            } else {
                stack.push(tokens[i])
            }
        }
        return stack.pop();
    }
}
