export function festivalGamePlus(nums) {
    const rows = nums.length;
    const columns = nums.length;
    const memo = Array.from(Array(rows), () => Array(columns));
    // path construction from to Target Begin [--->-<----] End
    // memo will be filled:

    function dfs(l, r) {
        if (l > r) {
            return 0;
        }

        if (memo[l][r]) {
            return memo[l][r];
        }

        let totalMax = 0;

        // loop through potential targets
        for (let targetIndex = l; targetIndex <= r; targetIndex++) {
            const points = getPointsForSelectedTarget(l, targetIndex, r);
            const maxForSelectedTarget = dfs(l, targetIndex - 1) +  points + dfs(targetIndex + 1, r);
            totalMax = Math.max(totalMax, maxForSelectedTarget);
        }

        return memo[l][r] = totalMax;
    }

    function getPointsForSelectedTarget(theMostLeftTarget, selectedTarget, theMostRightTarget) {
        // compute points of shooting this target
        const left_multiplier = (theMostLeftTarget === 0 ? 1 : nums[theMostLeftTarget - 1]);
        const right_multiplier = (theMostRightTarget === nums.length - 1 ? 1 : nums[theMostRightTarget + 1]);
        return left_multiplier * nums[selectedTarget] * right_multiplier;
    }

    // start
    return dfs(0, nums.length - 1);
}
