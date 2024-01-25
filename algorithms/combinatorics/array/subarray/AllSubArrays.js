export function generateAllSubArrays(start, nums, path, res){
    if (start === nums.length) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        res.push([...path].join("->"));
        linearRecursion(index + 1, nums, path, res);
        path.pop();
    }

    return res;
}

function linearRecursion(index, nums, path, res){
    if (index === nums.length) {
        return;
    }

    path.push(nums[index]);
    res.push([...path].join("->"));
    linearRecursion(index + 1, nums, path, res);
    path.pop();
}
