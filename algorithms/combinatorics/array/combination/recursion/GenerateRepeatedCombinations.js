export function generateRepeatedCombinations(level, start, nums, path, res){
    if (level === nums.length) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
        generateRepeatedCombinations(level + 1, index, nums, path, res);
        path.pop();
    }

    return res;
}
