/**
 * In binary recursion, a function calls itself two times.
 * 
 * @param arr
 * @param low
 * @param high
 * @returns {*}
 */

function binarySum(arr, low, high) {
    if (low === high) {
        return arr[low];
    } else {
        const mid = Math.floor((low + high) / 2);
        return binarySum(arr, low, mid) + binarySum(arr, mid + 1, high);
    }
}
