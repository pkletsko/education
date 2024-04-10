export function generatePermutations(ignoreIndexSet, nums, path, res){
    // termination condition (LEAF_NODE = nums.length)
    if (ignoreIndexSet.length === nums.length) {
        // in compare to dfs implementation where we used global array with default value,
        // here we have to return empty array to cover the case where nums array is empty
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        // pruning
        if (ignoreIndexSet.has(index)) {
            continue;
        }

        // add value to recursion state
        ignoreIndexSet.add(index);
        path.push(nums[index]);

        // collecting results
        res.push([...path].join("->"));

        // recursion call
        generatePermutations(ignoreIndexSet, nums, path, res);

        // remove value from recursion state
        path.pop();
        ignoreIndexSet.delete(index);
    }

    return res;
}
