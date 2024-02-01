export function generateRepeatedPermutations(level, nums, path, res){
    if (level === nums.length) {
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
        generateRepeatedPermutations(level + 1, nums, path, res);
        path.pop();
    }

    return res;
}
