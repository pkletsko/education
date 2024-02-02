export function tribonacciMinus(n) {
    let memo = {};
    // path construction from Target to 0 Begin [<--------] End
    // memo will be filled:              Begin [-------->] End

    function dfs(index) {
        if (index <= 0) {
            return 0;
        }

        if (index === 1 || index === 2) {
            return 1;
        }

        if (memo[index]) {
            return memo[index];
        }

        memo[index] = dfs(index - 1) + dfs(index - 2) + dfs(index - 3);

        return memo[index];
    }

    return dfs(n);
}
