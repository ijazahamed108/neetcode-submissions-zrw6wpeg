class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

if (t.length > s.length) return "";
        let left=0;
        let minLen = Infinity;
        let map = new Map();
        let needed = t.length;
        let start =0;
        
        for (let c of t){
            map.set(c, (map.get(c)||0)+1)
        }
        for (let right = 0;right<s.length;right++){
            let ch = s[right];
             if(map.has(ch)){
                if(map.get(ch) > 0){
                    needed--;
                }
                map.set(ch, map.get(ch)-1);
             }
             while(needed == 0){
                if(right-left +1 < minLen){
                    minLen = right-left+1;
                    start = left;
                }
                let leftCh = s[left];

                if(map.has(leftCh)){
                    map.set(leftCh, map.get(leftCh)+1)
                    if(map.get(leftCh)>0) needed++
                    
                }
                left++
             }
        }
        return minLen === Infinity ? "" : s.slice(start, start+minLen)
    }
}
