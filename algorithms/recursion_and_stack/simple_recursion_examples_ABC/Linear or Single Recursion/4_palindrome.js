function is_palindrome(input) {
    if (input.length === 0 || input.length === 1) {
        return true;
    }

    if (input.charAt(0) === input.charAt(input.length - 1)) {
        return is_palindrome(input.substring(1, input.length - 1));
    }

    return false;
}

console.log(is_palindrome("racecar"));
console.log(is_palindrome("raceecar"));
console.log(is_palindrome("racee2car"));
