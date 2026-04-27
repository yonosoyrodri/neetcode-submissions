class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenNumbers = new Map();

        let indexes = [];

        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if(seenNumbers.has(complement)) {
                indexes = [seenNumbers.get(complement), i]
            }

            seenNumbers.set(nums[i], i)
        }
        
        return indexes
    }
}
