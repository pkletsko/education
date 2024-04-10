export function generateRepeatedPermutations(level, nums, path, res){
    // termination condition (LEAF_NODE = nums.length)
    if (level === nums.length) {
        // in compare to dfs implementation where we used global array with default value,
        // here we have to return empty array to cover the case where nums array is empty
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        // add value to recursion state
        path.push(nums[index]);

        // collecting results
        res.push([...path].join("->"));

        // recursion call
        generateRepeatedPermutations(level + 1, nums, path, res);

        // remove value from recursion state
        path.pop();
    }

    return res;
}
