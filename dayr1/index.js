// 1. Variables
let count = 0;
let name = "keith";

// 2. Conditionals
if (count === 0) {
    console.log("Count is zero");
}

// 3. Function
function greet() {
    console.log("Hello JS");
}

greet();
// 4. Array / Loop
let array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 5. DOM-safe fake (won't error without html)
console.log(document.querySelector('#fake'));