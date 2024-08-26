function factorialTail(n, result = 1) {
    if (n === 0) {
        return result;
    } else {
        return factorialTail(n - 1, n * result);
    }
}
