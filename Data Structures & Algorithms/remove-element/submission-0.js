class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if (nums[right] != val) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left += 1;
            }
        }

        nums.splice(left);

        return nums.length
    }
}
