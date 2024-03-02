export function countSubstringsDP(s) {
    let res = 0;

    function calcPalindromesByExpanding(str, l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;

            res++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        calcPalindromesByExpanding(s, i, i);            // odd
        calcPalindromesByExpanding(s, i, i+1);       // even
    }

    return res;
}
