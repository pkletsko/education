// String or numbers Ascending order

let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

let numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// !!! NOTE
let nums = [1,2,4,8,16];
nums.sort();
console.log("INCORRECT - > ", nums);
//WILL give [[ 1, 16, 2, 4, 8 ]] because we sort by default alphabetically
nums.sort((a, b) => a - b);
console.log("CORRECT - > ",nums);
// IS CORRECT !!!


// Custom Sorting

//Ascending a- b
numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

//Descending b -a
numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

let items = [
    { name: 'apple', price: 50 },
    { name: 'banana', price: 30 },
    { name: 'cherry', price: 60 }
];
items.sort((a, b) => a.price - b.price);
console.log(items);
// Output: [{ name: 'banana', price: 30 }, { name: 'apple', price: 50 }, { name: 'cherry', price: 60 }]
