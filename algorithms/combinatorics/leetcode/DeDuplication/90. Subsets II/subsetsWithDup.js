/**
 * Given an integer array nums that may contain duplicates, return all possible
 * subsets
 *  (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export function subsetsWithDup(nums) {
    let res = [[]];

    nums.sort((a, b) => a - b);

    function dfs(start, path) {
        if (start === nums.length) {
            return;
        }

        let prev = Infinity;

        for(let i = start; i < nums.length; i++) {
            if (prev === nums[i]) {
                continue;
            }

            path.push(nums[i]);

            res.push([...path]);

            dfs(i + 1, path);

            path.pop();

            prev = nums[i];
        }
    }

    dfs(0, []);

    return res;
};
