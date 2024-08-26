function find_binary(decimal, result) {
    if (decimal === 0) {
        return result;
    }

    result = decimal % 2 + result;

    return find_binary(Math.floor(decimal / 2), result )
}

console.log(find_binary(233, ""));

function find_binary_v2(decimal, result) {
    if (decimal === 0) {
        return result;
    }

    result.push(decimal % 2);

    return find_binary(Math.floor(decimal / 2), result )
}

console.log(find_binary_v2(233, []));
