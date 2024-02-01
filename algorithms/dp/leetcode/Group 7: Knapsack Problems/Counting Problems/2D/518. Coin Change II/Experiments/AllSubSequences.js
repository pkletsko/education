function generateAllSubSequences(nums, amount){
    let res = [];

    function dfs(start, path) {
        if (start === nums.length) {
            return [];
        }

        for(let index = start; index < nums.length; index++) {
            path.push(nums[index]);
            // modification of original alg
            let s = 0;
            for(const coin of path) {
                s += coin;
            }
            if (s === amount) {
                res.push([...path].join("->"));
            }

            dfs(index + 1, path);

            path.pop();
        }
    }

    // start
    dfs(0, []);

    return res;
}

export function change(coins, amount) {
    return generateAllSubSequences(coins, amount);
}
