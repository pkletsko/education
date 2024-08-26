/**
 * the greatest common divisor of two integers m and n.
 * 
 * @param m
 * @param n
 * @returns {*}
 */

function gcd(m, n) {
    let r;
    if (m < n) {
        return gcd(n, m);
    }
    r = m % n;
    if (r === 0) {
        return n;
    } else {
        return gcd(n, r);
    }
}
