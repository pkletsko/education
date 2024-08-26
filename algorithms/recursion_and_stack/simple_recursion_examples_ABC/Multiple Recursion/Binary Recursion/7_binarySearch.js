function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the range is invalid, target is not found
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    }

    // If the target is smaller than the middle element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is larger than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(arr, target);
console.log(result); // Output: 4 (index of the target value 5)
