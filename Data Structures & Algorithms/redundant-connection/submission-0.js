class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const parent = Array.from({length:n+1}, (_,i)=>i);

        const find = (x) =>{
            if(x !== parent[x]){
                parent[x] = find(parent[x])
            }
            return parent[x];
        }

        const union = (src, dest) =>{
            const rootX = find(src);
            const rootY = find(dest);
            if(rootX === rootY) return false;
            parent[rootX] = rootY;
            return true;
        }

        for (let [src, dest] of edges){
            if(!union(src,dest)) return [src, dest];
        }

    }
}
