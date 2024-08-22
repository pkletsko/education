/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,2]
 * Output:
 * [[1,1,2],
 *  [1,2,1],
 *  [2,1,1]]
 * Example 2:
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */


/**
* @param {number[]} nums
* @return {number[][]}
*/

export function permuteUnique(nums) {
    let res = [];

    nums.sort((a,b) => a - b);

    function dfs(ignoreIndexSet, path) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        let prev = Infinity;

        for(let i = 0; i < nums.length; i++) {
            if (prev === nums[i]) {
                continue;
            }

            if (ignoreIndexSet.has(i)) {
                continue;
            }

            ignoreIndexSet.add(i);

            path.push(nums[i]);

            dfs(ignoreIndexSet, path);

            path.pop();
            ignoreIndexSet.delete(i);

            prev = nums[i];
        }
    }

    dfs(new Set(), []);

    return res;
}
