/**
 * Computes the prefix sum of an array.
 *
 * @param {number[]} nums - An array of numbers.
 * @return {number[]} - The prefix sum array, where each element at index i is the sum of the elements from index 0 to i of the input array.
 *
 * @example
 * // Example input
 * const nums = [1, 2, 3, 4];
 * // Function call
 * const result = prefixSum(nums);
 * // Expected output
 * console.log(result); // [1, 3, 6, 10]
 */
function prefixSum(nums) {
    let prefixSums = [];
    let currentSum = 0;

    for (let num of nums) {
        currentSum += num;
        prefixSums.push(currentSum);
    }

    return prefixSums;
}

// Example input
const nums = [1, 2, 3, 4];
// Function call
const result = prefixSum(nums);
// Expected output
console.log(result); // [1, 3, 6, 10]
