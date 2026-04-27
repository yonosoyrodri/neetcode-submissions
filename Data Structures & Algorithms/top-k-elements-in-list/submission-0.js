class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //map<num, freq>
        const mapFreq = new Map();

        //1. Constuir el mapa de frecuencias de cada elemento del array
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            mapFreq.set(num, (mapFreq.get(num) || 0) + 1);
        }

        //2. Inicializar los buckets
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        //3. Agrupar los numeros por su frecuencia
        for (const [num, freq] of mapFreq.entries()) {
            buckets[freq].push(num);
        }


        //4. Recorrer los buckets en reversa para obtener los números más frecuentes
        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        //5. Retornar el resultado
        return result.slice(0, k);
    }
}
