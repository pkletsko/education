/*
* To modify the given counting dynamic programming (DP) solution to return the actual subset rather than just the size of the largest divisible subset,
* you need to track the elements that contribute to the largest subset as you build up the solution.
* This can be done by maintaining additional data structures to store the predecessor indices and then reconstructing the subset at the end.
* */
export function largestDivisibleSubset(nums) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [Random order] End

    nums.sort((a, b) => a - b);

    function dfs(start) {
        if (start === 0) { // Base case: the first number can always form a subset of size
            return [nums[start]];
        }

        if (memo[start]) {
            return memo[start];
        }

        let maxCombination = [nums[start]];

        for(let index = 0; index < start; index++) {
            if (nums[start] % nums[index] === 0) { // pruning
                const result = dfs(index);
                const currentCombination = [...result, nums[start]];
                if (currentCombination.length > maxCombination.length) {
                    maxCombination = currentCombination;
                }
            }
        }

        return memo[start] = maxCombination;
    }

    // start
    let maxCombination = [];
    for (let i = 0; i < nums.length; i++) {
        const currentCombination = dfs(i);
        if (currentCombination.length > maxCombination.length) {
            maxCombination = currentCombination;
        }
    }

    return maxCombination;
}
