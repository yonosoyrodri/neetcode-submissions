class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const mapString = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let bracket of s) {
            if (mapString[bracket]) {
                if (stack.length > 0 && stack[stack.length - 1] === mapString[bracket]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(bracket);
            }
        }

        return stack.length === 0;
    }
}
