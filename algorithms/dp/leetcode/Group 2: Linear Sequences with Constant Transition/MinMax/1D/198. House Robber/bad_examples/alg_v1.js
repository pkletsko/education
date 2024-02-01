/**
 * @param {number[]} nums
 * @return {number}
 */
// working but limited solution (find out what is wrong)
export function rob(nums) {

    // this solution is bad because it introduces the second input parameter which makes it impossible to memo by index.
    function dfs(robIndex, sum, nums) {
        if (robIndex >= nums.length) {
            return sum;
        }
        return Math.max(
            dfs(robIndex + 1, sum, nums),
            dfs(robIndex + 2, sum + nums[robIndex], nums)
        );
    }

    return dfs(0, 0, nums);
}

// incorrect solution (find out why)
export function rob_v2(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let memo = Array(nums.length).fill(-1);

    function dfs(robIndex, sum, nums, memo) {
        if (robIndex >= nums.length) {
            return sum;
        }

        if (memo[robIndex] !== -1) {
            return memo[robIndex];
        }

        let answer = Math.max(
            dfs(robIndex + 1, sum, nums, memo),
            robIndex + 2 < nums.length ? dfs(robIndex + 2, sum + nums[robIndex + 2], nums, memo) : sum
        );

        memo[robIndex] = answer;

        return answer;
    }
    memo[0] = nums[0];
    return dfs(0, nums[0], nums, memo);
}
