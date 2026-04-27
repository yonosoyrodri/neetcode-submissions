class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let result = 0;
        let currentSum = 0;
        const preffixSum = new Map();
        preffixSum.set(0, 1);

        for (const num of nums) {
            //For each number in the array add it to currentSum
            currentSum += num;
            let diff = currentSum - k;

            //Add the difference to result
            result += preffixSum.get(diff) || 0;
            preffixSum.set(currentSum, (preffixSum.get(currentSum) || 0) + 1);
        }

        return result;
    }
}
