/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * Example 2:
 *
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 * Example 3:
 *
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // let l = 0;

    // let lastNumber = nums.length - 1;

    // let baseSum = 0;
    // for (let i = 1; i<= lastNumber; i++) {
    //     baseSum+=i;
    // }


    // for (let i = 0; i <  nums.length; i++) {
    //     baseSum-=nums[i];
    //     console.log("baseSum = " + baseSum);
    //     if (baseSum < 0) {
    //         return nums[i] + baseSum;
    //     } else if (baseSum === 0) {
    //         if (i+1 < nums.length) {
    //             return nums[i+1];
    //         }
    //     }

    // }

    // return nums[0];

// Find the intersection point of the two runners.
    let tortoise = nums[0];
    let hare = nums[0];

    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise != hare);

    console.log(tortoise);
    console.log(hare);

    // Find the "entrance" to the cycle.
    tortoise = nums[0];

    while (tortoise != hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return hare;


    //1 2 1

    // 2 2 4 2 2

    // 1 2 3 4 = 10
    // 1 1 2 3 4 = 11 12 13 14
    // 1 2 3 4 5 = 15

    // while (l < nums.length) {
    //     let r = nums.length;
    //     let number1 = nums[l];

    //      while (r > l) {
    //         let number2 = nums[r];
    //         if (number1 === number2) {
    //             return number1;
    //         }
    //         r--;

    //     }
    //     l++;
    // }

    // return -1;
};
