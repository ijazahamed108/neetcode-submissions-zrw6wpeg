class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {

        const totalCost = cost.reduce((a,b)=>a+b,0);
        const totalGas = gas.reduce((a,b)=>a+b,0);
        //if gas itself is less , then cannot reach
        if(totalGas<totalCost) return -1;
        let currentFuel = 0;
        let start = 0;
        for(let i=0; i<gas.length;i++){
            currentFuel += gas[i]-cost[i];
            if(currentFuel < 0){
                currentFuel = 0;
                start = i+1 // can reach so start from next station
            }
        }
        return start;
    }
}
