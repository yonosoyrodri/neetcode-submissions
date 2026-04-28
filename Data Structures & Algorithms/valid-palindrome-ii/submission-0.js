class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        //Verify if s is already a palindrome
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                return this.isPalindrome(s, l + 1, r) || this.isPalindrome(s, l, r - 1);
            }
            l++;
            r--;
        }

        return true;
    }

    /**
     * @param {string} str
     * @param {number} left
     * @param {number} right
     * @return {boolean}
     */
    isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
