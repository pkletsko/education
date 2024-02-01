export function coinMinus(coins, target) {
    const rows = coins.length;
    const columns = target + 1;
    const memo = Array.from(Array(rows), () => new Array(columns).fill(-1)); // Note!!! that we are initializing this array with -1 and not 0'ss
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(sum, start) {
        if (sum === 0) {
            return 1;
        }

        if (sum < 0) {
            return 0;
        }

        if (memo[start][sum] !== -1) {
            return memo[start][sum];
        }

        let result = 0;

        for(let index = start; index < coins.length; index++) {
            result += dfs(sum - coins[index], index);
        }

        return memo[start][sum] = result;
    }

    return dfs(target, 0);
}
