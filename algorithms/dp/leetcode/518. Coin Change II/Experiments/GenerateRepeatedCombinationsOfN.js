function generateRepeatedCombinationsOfN(level, start, nums, path, res, amount){
    if (level === amount) {
        return [];
    }

    for(let index = start; index < nums.length; index++) {
        path.push(nums[index]);
        // modification of original alg
        let s = 0;
        for(const coin of path) {
            s += coin;
        }
        if (s === amount) {
            res.push([...path].join("->"));
        }
        generateRepeatedCombinationsOfN(level + 1, index, nums, path, res, amount);
        path.pop();
    }

    return res;
}

export function change(amount, coins) {
    return generateRepeatedCombinationsOfN(0, 0, coins, [], [], amount);
}
