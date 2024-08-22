// The Fibonacci Sequence is the series of numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

export function fibonacci(n) {
    console.log("fibonacci(", n, ")");
    if (n === 0) { //BASE CASE
        return 0;
    }
    if (n === 1) { //BASE CASE
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2); // RECURSIVE CALL
}

export function fibonacci_v_1(calledFrom, n) {
    console.log(calledFrom, " fibonacci(", n, ")");
    if (n === 0) { //BASE CASE
        return 0;
    }
    if (n === 1) { //BASE CASE
        return 1;
    }

    let aggregateResult = 0;

    let left = fibonacci_v_1("left", n - 1); // RECURSIVE CALL #1
    console.log("left = ", left);
    let right = fibonacci_v_1("right", n - 2); // RECURSIVE CALL #2
    console.log("right = ", right);

    aggregateResult = left + right;

    console.log("State for n = ", n, " aggregateResult = ", aggregateResult);

    return aggregateResult;
}

// NOT CORRECT !!!!
export function fibonacciStack_v_1(n) {
    if (n <= 1) return n; // Handle base cases directly

    const stack = [];
    const results = {}; // To store results of subproblems

    stack.push(n); // Push the initial call

    while (stack.length > 0) {
        const current = stack.pop();

        if (current === 0 || current === 1) {
            results[current] = current; // Base cases
        } else if (results[current] === undefined) {
            // If result is not computed yet, push it back to process after subproblems
            stack.push(current);

            // Push subproblems
            stack.push(current - 1);
            stack.push(current - 2);
        }
    }

    // Calculate the Fibonacci numbers iteratively
    for (let i = 2; i <= n; i++) {
        if (results[i] === undefined) {
            results[i] = (results[i - 1] || 0) + (results[i - 2] || 0);
        }
    }

    console.log("State for n = ", n, " aggregateResult = ", results[n]);
    return results[n];
}

export function fibonacciStack_v_2(n) {
    const result = [];
    if (!n) return result;

    const stack = [];
    stack.push(n);

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node);

        // Push right child first so that left child is processed first
        if (node - 2 >= 0) {
            stack.push(node - 2);
        }

        if (node -1 >= 0) {
            stack.push(node - 1);
        }
    }

    return result;
}
