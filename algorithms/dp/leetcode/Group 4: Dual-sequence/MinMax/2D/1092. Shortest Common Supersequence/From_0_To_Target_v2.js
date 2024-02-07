export function shortestCommonSupersequencePlus_v2(str1, str2) {
    const memo = new Map();

    function helper(first, second) {
        if (!first && !second) {
            return "";
        }

        if (!first) {
            return second;
        }

        if (!second) {
            return first;
        }

        const key = first + '#' + second;
        if (memo.has(key)) {
            return memo.get(key);
        }

        let result;
        if (first[0] === second[0]) {
            result = first[0] + helper(first.substring(1), second.substring(1));
        } else {
            const right = second[0] + helper(first, second.substring(1));
            const left = first[0] + helper(first.substring(1), second);

            result = right.length > left.length ? left : right;
        }

        memo.set(key, result);
        return result;
    }

    return helper(str1, str2);
}

//str1 = "abac", str2 = "cab"
