const digits = "23";
const index = 0; // for example

let mapAsObject = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

for (const c of mapAsObject[digits[index]]) {
    // do something
}

const mapAsClass = new Map();
mapAsClass.set('2', ['a','b','c']);
mapAsClass.set('3', ['d','e','f']);
mapAsClass.set('4', ['g','h','i']);
mapAsClass.set('5', ['j','k','l']);
mapAsClass.set('6', ['m','n','o']);
mapAsClass.set('7', ['p','q','r','s']);
mapAsClass.set('8', ['t','u','v']);
mapAsClass.set('9', ['w','x','y','z']);

const currentDigit = digits[0];
const currentLetters = mapAsClass.get(currentDigit);

for (const c of currentLetters) {
    // do something
}
