class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let result = {};

    for (let s of strs) {
      let key = s.split("").sort().join();

      if (result[key]) {
        result[key].push(s);
      } else {
        result[key] = [s];
      }
    }

    return Object.values(result);
  }
}
