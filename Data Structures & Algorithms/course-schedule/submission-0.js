class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = new Map();
    
    // Initialize graph
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }
    
    // Build adjacency list
    for (const [course, prereq] of prerequisites) {
        graph.get(prereq).push(course);
    }
    
    const visited = new Map(); // 0: unvisited, 1: visiting, 2: visited
    
    const hasCycle = (course) => {
        if (visited.get(course) === 1) return true;  // Cycle detected
        if (visited.get(course) === 2) return false; // Already processed
        
        visited.set(course, 1); // Mark as visiting
        
        for (const nextCourse of graph.get(course)) {
            if (hasCycle(nextCourse)) return true;
        }
        
        visited.set(course, 2); // Mark as visited
        return false;
    };
    
    for (let course = 0; course < numCourses; course++) {
        if (hasCycle(course)) return false;
    }
    
    return true;
    }
}
