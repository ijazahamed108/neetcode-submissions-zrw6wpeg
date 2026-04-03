class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        let result = [];
        let n=s.length;
        const dp = Array.from({length:n}, ()=>Array(n).fill(false))
        for(let i=n-1;i>=0;i--){
            for(let j=i;j<n;j++){
                if(s[i] === s[j]){
                    if(j-i <=2){
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i+1][j-1]
                    }
                }
            }
        }
        
        function backtrack(start, path){
            if(n === start){
                result.push([...path]);
                return;
            }
            for(let i=start; i<n; i++){
                if(dp[start][i]){
                    path.push(s.substring(start, i+1));
                    backtrack(i+1, path);
                    path.pop();
                }
            }

        }
        backtrack(0,[]);
        return result;
    }
}
