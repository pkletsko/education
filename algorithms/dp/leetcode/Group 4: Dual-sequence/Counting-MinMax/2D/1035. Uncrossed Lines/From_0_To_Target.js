export function maxUncrossedLinesPlus(nums1, nums2) {
    let memo = Array.from(Array(nums1.length), ()=> new Array(nums2.length).fill(-1));
    // path construction from to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(i, j) {
        if (i === nums1.length || j === nums2.length) {
            return 0;
        }

        if(memo[i][j] !== -1) {
            return memo[i][j];
        }

        let max = 0;
        if (nums1[i] === nums2[j]) {
            max += dfs(i + 1, j + 1) + 1;
        } else {
            max += Math.max(dfs(i + 1, j),  dfs(i, j + 1));
        }

        return memo[i][j] = max;
    }

    return dfs(0, 0);
}
