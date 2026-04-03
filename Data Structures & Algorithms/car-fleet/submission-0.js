class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        
        let cars = [];
        let stack = [];

        for (let i=0;i<position.length;i++){
            cars.push ({
                pos:position[i],
                time: (target-position[i])/speed[i]
            })
        }
        cars.sort((a, b) => b.pos-a.pos);
        for(let i=0;i<cars.length;i++){
            let time = cars[i].time;
            if(stack.length ===0 || time > stack[stack.length-1]){
                stack.push(time)
            }
        }
        return stack.length;
        
    }
}
