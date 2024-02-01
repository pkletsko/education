export function coinMinus_v2(coins, target) {
    const rows = coins.length;
    const columns = target + 1;
    const memo = Array.from(Array(rows), () => new Array(columns).fill(-1)); // Note!!! that we are initializing this array with -1 and not 0'ss
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(sum, start) {

        if (sum === 0) {
            return 1
        }

        if (start === coins.length) {
            return 0;
        }

        if (memo[start][sum] !== -1) {
            return memo[start][sum];
        }

        if (coins[start] > sum) {
            memo[start][sum] = dfs(sum, start + 1);
        } else {
            memo[start][sum] = dfs(sum - coins[start], start) + dfs(sum, start + 1);
        }

        return memo[start][sum];
    }

    return dfs(target, 0);
}
