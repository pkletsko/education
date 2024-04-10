export function generateAllPathsRootToLeaf(start, nums, path, res){
    // termination condition (LEAF_NODE = nums.length)
    if (start === nums.length) {
        // collecting results
        res.push([...path].join("->"));
    }

    for(let index = start; index < nums.length; index++) {
        // add value to recursion state
        path.push(nums[index]);

        // recursion call
        generateAllPathsRootToLeaf(index + 1, nums, path, res);

        // remove value from recursion state
        path.pop();
    }

    return res;
}
