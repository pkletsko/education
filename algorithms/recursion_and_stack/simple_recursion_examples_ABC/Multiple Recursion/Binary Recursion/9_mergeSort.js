function mergeSort(arr) {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare the elements from both halves and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // If there are remaining elements in the left half, add them to the result
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // If there are remaining elements in the right half, add them to the result
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]
