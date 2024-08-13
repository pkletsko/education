// Given a sorted array of integers and an integer called target, find the element that equals the target and return its index.
// If the element is not found, return -1.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {  // <= because left and right could point to the same element, < would miss it
        let mid = left + Math.floor((right - left) / 2);  // use `(right - left) /2` to prevent `left + right` potential overflow
        if (arr[mid] === target) return mid;  // found target, return its index
        if (arr[mid] < target) {
            // middle less than target, discard left half by making left search boundary `mid + 1`
            left = mid + 1;
        } else {
            // middle greater than target, discard right half by making right search boundary `mid - 1`
            right = mid - 1;
        }
    }
    // if we get here we didn't hit above return so we didn't find target
    return -1;
}
