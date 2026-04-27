class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const mapFreq = new Map();

        //Constuir el mapa de frecuencias de cada elemento del array
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            mapFreq.set(num, (mapFreq.get(num) || 0) + 1);
        }

        //Buscar cual es el valor más frecuente en el hash map
        let mostFreq = 0;
        let maxCount = 0;

        for (let [value, count] of mapFreq) {
            if (count > maxCount) {
                maxCount = count;
                mostFreq = value;
            }
        }

        return mostFreq;
    }
}
