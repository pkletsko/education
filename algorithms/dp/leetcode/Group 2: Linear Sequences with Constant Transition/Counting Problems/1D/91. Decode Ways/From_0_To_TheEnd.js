export function numDecodings(s) {
    let memo = {};
    // path construction from 0 to Target Begin [-------->] End
    // memo will be filled:              Begin [<--------] End

    function dfs(index) {
        if (index === s.length) {
            return 1;
        }

        if (memo[index]) {
            return memo[index];
        }

        let aggregateResult = 0;

        if (s.charAt(index) !== '0') {
            aggregateResult += dfs(index + 1);

            if (index + 2 <= s.length && Number(s.slice(index, index + 2)) < 27) {
                aggregateResult += dfs(index + 2);
            }
        }

        return memo[index] = aggregateResult;
    }

    return dfs(0);
}
