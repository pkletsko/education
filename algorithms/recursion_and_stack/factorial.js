// finding the factorial of a number (5! = 5*4*3*2*1)

export function factorial(n) {
    console.log("factorial(", n, ")");
    if (n <= 1) { //BASE CASE
        return 1;
    }

    return n * factorial(n - 1); // RECURSIVE CALL
}

export function factorialStack(n) {
    let stack = [];

    // What style of loop do you prefer ?
    // while(n > 0) {
    //     stack.push(n);
    //     n -= 1;
    // }
    //
    // for (; n > 0; n -= 1) {
    //     stack.push(n);
    // }

    console.log("Push to stack:");
    for (let i = n; i > 0; i--) {
        stack.push(i);
        console.log(i);
    }
    console.log("Bottom", stack, "UP");

    let result = 1;

    console.log("Pop from stack:");
    while(stack.length > 0) {
        const item = stack.pop();
        console.log(item);
        result *= item;
    }

    return result;
}
