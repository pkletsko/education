/**
 * Exponential recursion refers to a scenario where the number of recursive calls grows exponentially with the size of the input.
 * This type of recursion can lead to inefficient algorithms with high time complexity.
 * An example of exponential recursion is the recursive calculation of powers, such as in the case of calculating 2^n.
 * @param n
 * @returns {number}
 */

// Exponential recursion for calculating 2^n
function powerOfTwo(n) {
    if (n === 0) {
        return 1;
    } else {
        return 2 * powerOfTwo(n - 1);
    }
}
// Example usage
console.log(powerOfTwo(3)); // Output: 8 (2^3)
