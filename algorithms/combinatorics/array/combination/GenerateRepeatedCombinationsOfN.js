export function generateRepeatedCombinationsOfN(nums, path, res, n){
    if (n === 0) {
        return [];
    }

    for(let index = 0; index < nums.length; index++) {
        path.push(nums[index]);
        if (path.length === n) {
            res.push([...path].join("->"));
        }
        exponentialRecursion(1, index, nums, path, res, n);
        path.pop();
    }

    return res;
}

function exponentialRecursion(level, start,  nums, path, res, n){
    if (level === n) {
        return;
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        if (path.length === n) {
            res.push([...path].join("->"));
        }
        exponentialRecursion(level + 1, start, nums, path, res, n);
        path.pop();
    }
}
