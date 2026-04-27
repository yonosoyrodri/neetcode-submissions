public class Solution {
    public int[] GetConcatenation(int[] nums) {
        var ans = new List<int>();

        for (var i = 0; i < nums.Length; i++) {
            ans.Add(nums[i]);
        }

        for (var i = 0; i < nums.Length; i++) {
            ans.Add(nums[i]);
        }

        return ans.ToArray();
    }
}