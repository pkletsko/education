/**
 * Given a string s, partition s such that every
 * substring
 *  of the partition is a
 * palindrome
 * . Return all possible palindrome partitioning of s.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * Example 2:
 *
 * Input: s = "a"
 * Output: [["a"]]
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];

    function isPalindrome(str) {
        let l = 0;
        let r = str.length - 1;

        while(l < r) {
            if (str[l] !== str[r]) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }

    function dfs(start, path) {
        if (start === s.length) {
            res.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const prefix = s.substring(start, end);
            if(isPalindrome(prefix)) {
                path.push(prefix);

                dfs(end, path);

                path.pop();
            }

        }


    }

    dfs(0, []);

    return res;

};
