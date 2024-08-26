function reverse_string(input) {
    if(input === "") {
        return "";
    }

    return reverse_string(input.substring(1)) + input.charAt(0);
}

console.log(reverse_string("hello"));


function reverse_string_stack(input) {
    const stack = [];
    for(const c of input) {
        stack.push(c);
    }

    let result = "";

    while(stack.length > 0) {
        result += stack.pop();
    }

    return result;
}

console.log(reverse_string_stack("hello"));
