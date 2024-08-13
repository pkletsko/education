/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    const targetMap = new Map();

    const result = [];

    for(let char of p) {
        if (targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char) + 1);
        } else {
            targetMap.set(char, 1);
        }
    }

    let windowStart = 0;
    let windowEnd = p.length;

    const windowMap = new Map();
    let init = true;

    while(windowEnd <= s.length) {
        if (init) {
            for(let i = windowStart; i < windowEnd; i++) {
                let char = s[i];
                if (windowMap.has(char)) {
                    windowMap.set(char, windowMap.get(char) + 1);
                } else {
                    windowMap.set(char, 1);
                }
            }
            init = false;
        } else {
            // delete or update the beginning
            let outChar = s[windowStart];
            if (windowMap.get(outChar) === 1) {
                // delete
                windowMap.delete(outChar);
            } else {
                // decrease by 1
                windowMap.set(outChar, windowMap.get(outChar) - 1);
            }

            // move left point of window
            windowStart++;

            // add  a new last char
            let char = s[windowEnd];
            if (windowMap.has(char)) {
                windowMap.set(char, windowMap.get(char) + 1);
            } else {
                windowMap.set(char, 1);
            }

            // move right point of window
            windowEnd++;
        }

        let check = true;
        for(let key of windowMap.keys()){
            if (targetMap.get(key) !== windowMap.get(key)) {
                check = false;
                break;
            }
        }
        // console.log(windowStart, windowEnd, check);
        // console.log(windowMap);

        if (check) {
            result.push(windowStart)
        }
    }
    return result;
};


console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("ab", "ba"))
