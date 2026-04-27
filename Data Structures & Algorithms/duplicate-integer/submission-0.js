class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Map()

        for(let num of nums) {
            if(seen.has(num)) return true
            seen.set(num)
        }

        return false
    }
}
