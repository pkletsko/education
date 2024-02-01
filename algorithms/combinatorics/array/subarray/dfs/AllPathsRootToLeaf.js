export function generateAllPathsRootToLeaf(nums){
    let res = [];

    function dfs(start, path) {
        if (start === nums.length) {
            res.push([...path].join("->"));
        }

        for(let index = start; index < nums.length; index++) {
            path.push(nums[index]);

            dfs(index + 1, path);

            path.pop();
        }
    }

    // start
    dfs(0, []);

    return res;
}
