/**
 * In linear recursion, a function calls itself exactly once.
 *
 * @param n
 * @returns {number}
 */

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
