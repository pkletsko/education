export function countSubstrings(s) {
    function isPalindrom(start, end) {
        while(start <= end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }

    function dfs(start) {
        if (start === s.length) {
            return 0;
        }

        let counter = 0;

        for(let end = start; end <= s.length; end++) {
            if (isPalindrom(start, end)) {
                counter++;
            }
        }

        counter += dfs(start + 1);

        return counter;
    }

    return dfs(0);
}
