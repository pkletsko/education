export function climbStairsPlus(n) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(index) {
        if (index === n) {
            return 1;
        }

        if (index > n) {
            return 0;
        }

        if (memo[index]) {
            return memo[index];
        }

        memo[index] = dfs(index + 1) + dfs(index + 2);

        return memo[index];
    }

    return dfs(0);
}
