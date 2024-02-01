export function generateAllSubSequences(nums){
    let res = [];

    function dfs(start, path) {
        if (start === nums.length) {
            return;
        }

        for(let index = start; index < nums.length; index++) {
            path.push(nums[index]);
            res.push([...path].join("->"));

            dfs(index + 1, path);

            path.pop();
        }
    }

    // start
    dfs(0, []);

    return res;
}
