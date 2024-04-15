/**
 Given an integer n, return the least number of perfect square numbers that sum to n.
 A perfect square is an integer that is the square of an integer;
 in other words, it is the product of some integer with itself.
 For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

 Example 1:

 Input: n = 12
 Output: 3
 Explanation: 12 = 4 + 4 + 4.

 Example 2:

 Input: n = 13
 Output: 2
 Explanation: 13 = 4 + 9.

 Constraints:
 1 <= n <= 104
 */

export function numSquaresPlus(target) {
    // key/value store (memoization)
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(sum) {
        // termination condition
        // we stop recursion and return 0 since counter of squares will be located after recursion call
        if (sum === target) {
            return 0;
        }

        // termination condition
        // If we overshoot (sum is more than target),
        // then we will return Infinity since we will not count this move.
        if (sum > target) {
            return Infinity;
        }

        // get already calculated value
        if (memo[sum]) {
            return memo[sum];
        }

        // aggregate variable with default largest possible value
        let aggregateResult = Infinity;

        // iterate only squares which is less than current target - sum
        for(let square = 1; square * square <= target - sum; square++) {
            // compose perfect square
            const pSquare = square * square;
            // recursion call with new sum
            const result = dfs(sum + pSquare);
            // keeping min number of perfect squares to build current sum
            aggregateResult = Math.min(result + 1, aggregateResult);
        }

        // memoization of aggregated result
        return memo[sum] = aggregateResult;
    }

    // init recursion from 0 (means no numbers used yet to composed target)
    return dfs(0);
}
