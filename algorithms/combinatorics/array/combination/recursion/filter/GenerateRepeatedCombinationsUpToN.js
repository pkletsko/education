export function generateRepeatedCombinationsUpToN(level, start, nums, path, res, n){
    if (level === n) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
        generateRepeatedCombinationsUpToN(level + 1, index, nums, path, res, n);
        path.pop();
    }

    return res;
}
