export function generateCombinations(start, nums, path, res){
    if (start === nums.length) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
        generateCombinations(index + 1, nums, path, res);
        path.pop();
    }

    return res;
}
