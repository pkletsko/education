export function findTargetIndex(nums, targetValue) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2); //  to avoid potential integer overflow

        if (nums[mid] === targetValue) {
            return mid;
        } else if (nums[mid] < targetValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
