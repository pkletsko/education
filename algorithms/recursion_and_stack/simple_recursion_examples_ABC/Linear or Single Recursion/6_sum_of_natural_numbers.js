function sum_of_natural_numbers(num) {
    if (num <= 1) {
        return num;
    }

    return sum_of_natural_numbers(num -1) + num;
}
