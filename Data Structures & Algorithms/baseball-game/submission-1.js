class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (let i = 0; i < operations.length; i++) {
            let scoreSum = 0
            let scoreProd = 0

            if(operations[i].includes("+")) {
                scoreSum = Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]) 
                stack.push(scoreSum);
            } else if (operations[i].includes("D")) {
                scoreProd = 2 * Number(stack[stack.length - 1])
                stack.push(scoreProd)
            } else if (operations[i].includes("C")) {
                stack.pop()
            } else {
                stack.push(Number(operations[i]))
            }
        }

        const sum = stack.reduce((accumulator, current) => accumulator + current, 0);

        return sum
    }
}
