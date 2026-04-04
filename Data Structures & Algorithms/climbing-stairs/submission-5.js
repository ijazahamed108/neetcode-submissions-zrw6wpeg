class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n<=3){
        return n;
    }
    let a =3; let b=2;
    for (let i=0;i<n-3;i++){
        a=a+b;
        b=a-b;
    }
    return a;

    }
}
