/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 *
 *
 *
 * Example 1:
 *
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * Example 2:
 *
 * Input: digits = ""
 * Output: []
 * Example 3:
 *
 * Input: digits = "2"
 * Output: ["a","b","c"]
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const res = [];

    if (digits.length === 0) {
        return res;
    }

    const phone = new Map();
    phone.set('2', ['a','b','c']);
    phone.set('3', ['d','e','f']);
    phone.set('4', ['g','h','i']);
    phone.set('5', ['j','k','l']);
    phone.set('6', ['m','n','o']);
    phone.set('7', ['p','q','r','s']);
    phone.set('8', ['t','u','v']);
    phone.set('9', ['w','x','y','z']);

    function dfs(start, path) {
        if (start === digits.length) {
            res.push([...path].join(''));
            return;
        }

        const currentDigit = digits[start];
        const currentLetters = phone.get(currentDigit);

        for(let i = 0; i < currentLetters.length; i++) {
            path.push(currentLetters[i]);
            dfs(start + 1, path);
            path.pop();
        }
    }

    dfs(0, []);

    return res;
};
