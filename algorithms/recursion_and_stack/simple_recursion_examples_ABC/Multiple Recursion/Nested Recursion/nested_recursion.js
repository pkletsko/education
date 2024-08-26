/**
 * Nested recursion occurs when a recursive function calls another instance of itself as an argument.
 * @param n
 * @returns {*|number}
 */

function nestedRecursion(n) {
    if (n > 100) {
        return n - 10;
    } else {
        return nestedRecursion(nestedRecursion(n + 11));
    }
}
