function generateAllSubSequences(start, nums, path, res, amount){
    if (start === nums.length) {
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
        generateAllSubSequences(index + 1, nums, path, res, amount);
        path.pop();
    }

    return res;
}

export function change(amount, coins) {
    return generateAllSubSequences(0, coins, [], [], amount);
}
