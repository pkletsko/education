/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let res = 0;
    let sum = 0;

    let mem = new Map();
    mem.set(0,1);

    for (let i =0; i < nums.length; i++) {
        sum += nums[i];

        if (mem.has(sum-k)) {
            res += mem.get(sum-k);
        }

        if (mem.has(sum)) {
            mem.set(sum, mem.get(sum) + 1);
        } else {
            mem.set(sum, 1);
        }
    }
    return res;
};
