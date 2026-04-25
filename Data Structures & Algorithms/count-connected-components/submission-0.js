class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
       
        const parent = Array.from({length:n}, (_,i)=>i);
        let components = n;

        const find = (x) =>{
            if(x !== parent[x]){
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        const union = (src, dst) =>{

            let rootX = find(src);
            let rootY = find(dst);
            if(rootX === rootY) return false;
            parent[rootX] = rootY;
            components--;
            return true;
        }

        for (let [src, dst] of edges){
            union(src, dst);
        }
        return components;

    }
}
