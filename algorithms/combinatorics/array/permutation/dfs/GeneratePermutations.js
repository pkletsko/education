export function generatePermutations(nums){
    let res = [];

    function dfs(ignoreIndexSet, path) {
        if (ignoreIndexSet.length === nums.length) {
            return;
        }

        for(let index = 0; index < nums.length; index++) {
            if (ignoreIndexSet.has(index)) {
                continue;
            }
            ignoreIndexSet.add(index);
            path.push(nums[index]);
            res.push([...path].join("->"));

            dfs(ignoreIndexSet, path);

            path.pop();
            ignoreIndexSet.delete(index);
        }
    }

    // start
    dfs(new Set(), []);

    return res;
}
