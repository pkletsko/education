/**
 * In multiple recursion, a function calls itself more than once.
 *
 * @param n
 * @returns {*}
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
