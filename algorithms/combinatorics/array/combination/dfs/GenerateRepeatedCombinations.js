export function generateRepeatedCombinations(nums){
    let res = []

    function dfs(level, start, path) {
        if (level === nums.length) {
            return;
        }

        for(let index = start; index < nums.length; index++) {
            path.push(nums[index]);
            res.push([...path].join("->"));

            dfs(level + 1, index, path);

            path.pop();
        }
    }

    // start
    dfs(0,0, []);

    return res;
}
