/**
    The Tribonacci sequence Tn is defined as follows:
    T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
    Given n, return the value of Tn.

Example 1:
    Input: n = 4
    Output: 4
Explanation:
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4

Example 2:
    Input: n = 25
    Output: 1389537

Constraints: 0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

export function tribonacci(targetTribonacciNumber) {
    // key/value store (memoization)
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(tribonacciNumber) {
        // termination condition + default value when T0 = 0
        if (tribonacciNumber <= 0) {
            return 0;
        }

        // default value when T1 = 1, T2 = 1
        if (tribonacciNumber === 1 || tribonacciNumber === 2) {
            return 1;
        }

        // get already calculated value
        if (memo[tribonacciNumber]) {
            return memo[tribonacciNumber];
        }

        // call recursion for 3 previous tribonacci numbers + record value to key/value store
        return memo[tribonacciNumber] =
            dfs(tribonacciNumber - 1) +
            dfs(tribonacciNumber - 2) +
            dfs(tribonacciNumber - 3);
    }

    // init recursion call
    return dfs(targetTribonacciNumber);
}
