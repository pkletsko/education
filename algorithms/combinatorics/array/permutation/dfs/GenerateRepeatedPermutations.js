export function generateRepeatedPermutations(nums){
    let res = [];

    function dfs(level, path) {
        if (level === nums.length) {
            return;
        }

        for(let index = 0; index < nums.length; index++) {
            path.push(nums[index]);
            res.push([...path].join("->"));

            dfs(level + 1, path);

            path.pop();
        }
    }

    // start
    dfs(0, []);

    return res;
}
