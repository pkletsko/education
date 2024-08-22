/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 *
 *
 * Example 1:
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * Example 2:
 *
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 * [1,2,2],
 * [5]
 * ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export function combinationSum2_v2(candidates, target) {
    let res = [];

    // deduplication part 1 : sorting NOTE !! this is a key of deduplication
    candidates.sort((a,b) => a - b);

    function dfs(start, sum, path) {
        if (sum > target) {
            return;
        }

        if (sum === target) {
            res.push([...path]);
            return;
        }

        let prev = -1;  // NOTE that init value is -1 since all values in array are positive, so 

        for(let i = start; i < candidates.length; i++){
            // pruning
            if (prev === candidates[i]) { // deduplication part 2 : ignore numbers similar to previous
                continue;
            }

            // collecting results
            path.push(candidates[i]);

            // recursion call
            dfs(i + 1, sum + candidates[i], path);

            // remove value from recursion state
            path.pop();

            prev = candidates[i];
        }
    }

    // start (init recursion call)
    dfs(0, 0, []);

    return res;
};
