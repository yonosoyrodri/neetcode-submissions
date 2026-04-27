class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        /**
         * @param {string} str
         */
        const cleanString = (str) => str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

        const sNormal = cleanString(s);
        const sReversed = sNormal.split("").reverse().join("");

        if (sNormal == sReversed) return true;

        return false;
    }
}
