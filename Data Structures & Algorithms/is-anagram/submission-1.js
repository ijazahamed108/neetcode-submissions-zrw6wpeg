class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        // return s.split('').sort().join('') === t.split('').sort().join('')

        let sMap = {};
        let tMap = {};

        for (let i=0; i< s.length; i++){
            if(sMap[s[i]]){
                sMap[s[i]] = sMap[s[i]]+1; 
            } else {
                 sMap[s[i]] =1;
            }
            if(tMap[t[i]]){
                tMap[t[i]] = tMap[t[i]]+1;
            }
            else {
                tMap[t[i]] =1;
            }


        }
        for (let [key, value] of Object.entries(sMap)){
            const sMapval = sMap[key];
            const tMapval = tMap[key];
            if( sMapval !== tMapval){
                return false;
            }
        }
        return true;
    }
}
