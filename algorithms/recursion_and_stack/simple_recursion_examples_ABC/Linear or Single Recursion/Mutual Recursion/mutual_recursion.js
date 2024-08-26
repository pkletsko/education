/**
 * In mutual recursion, two or more functions call each other in a circular manner.
 * 
 * @param n
 * @returns {boolean|boolean|*}
 */

function isEven(n) {
    if (n === 0) {
        return true;
    } else {
        return isOdd(n - 1);
    }
}
function isOdd(n) {
    if (n === 0) {
        return false;
    } else {
        return isEven(n - 1);
    }
}
