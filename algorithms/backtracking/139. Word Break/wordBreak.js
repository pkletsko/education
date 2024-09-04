/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 * Example 2:
 *
 * Input: s = "applepenapple", wordDict = ["apple","pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * Example 3:
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: false
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s and wordDict[i] consist of only lowercase English letters.
 * All the strings of wordDict are unique.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = {};

    function dfs(index) {
        if (index === s.length) {
            return true;
        }

        if (index in memo) { //memo[index] //NOTE !!! this is because we store boolean value in memo
            return memo[index];
        }

        let aggregate = false;

        for(const word of wordDict) {
            if (s.slice(index).startsWith(word)) {
                if (dfs(index + word.length)) {
                    aggregate = true;
                    break;
                }
            }
        }

        return memo[index] = aggregate;
    }

    return dfs(0);
};

/**
 * Usage: This can lead to incorrect behavior if the memoized value is a falsy value.
 * For example, if the memoized value is 0, false, or null, the condition will evaluate as false even though the value exists in the memo object.
 *
 * const memo = { 0: false, 1: 0 };
 *
 * if (memo[0]) {
 *     console.log(memo[0]); // This will not run because false is falsy
 * }
 *
 * if (memo[1]) {
 *     console.log(memo[1]); // This will not run because 0 is falsy
 * }
 */
