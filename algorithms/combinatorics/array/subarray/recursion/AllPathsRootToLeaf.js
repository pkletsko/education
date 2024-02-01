export function generateAllPathsRootToLeaf(start, nums, path, res){
    if (start === nums.length) {
        res.push([...path].join("->"));
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        generateAllPathsRootToLeaf(index + 1, nums, path, res);
        path.pop();
    }

    return res;
}
