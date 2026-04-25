class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {

        //initialize grapgh and indegree array
        const graph = Array.from({length:numCourses}, ()=>[]);
        const indegree = Array(numCourses).fill(0);

        //prepare Graph and indegree array
        for(let [course, preReq] of prerequisites){
            graph[preReq].push(course);
            indegree[course]++;
        }
        
        const queue = [];
        const result = [];
        //start with courses having no preReq
        for (let i=0; i<numCourses; i++){
            if(indegree[i] ===0 ){
                queue.push(i);
            }
        }

        while(queue.length){
            const course = queue.shift();
            result.push(course);

            // check its neighbours
            for(let next of graph[course]){
                indegree[next]--;
                if(indegree[next] ===0) queue.push(next);
            }
        }
        return result.length === numCourses ? result : [];

    }
}
