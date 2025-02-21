"use strict"; // ECMAScript 5 introduced "strict mode" to help write more secure JavaScript code. It treats all JS code as a newer version of JS.

// alert(3 + 2); // we are using Node.js so alert won't work here. It will work in browser console.

console.log(3 
    +
     3) //Code readability should be high priority. This is not the best way to write code.

console.log(3 + 3) //Code readability should be high priority. This is the best way to write code.
// JavaScript Data Types

// 1. Number: Represents both integer and floating-point numbers.
let num = 42;
let floatNum = 3.14;

// 2. String: Represents a sequence of characters.
let str = "Hello, World!";

// 3. Boolean: Represents a logical entity and can have two values: true or false.
let isTrue = true;
let isFalse = false;

// 4. Undefined: A variable that has been declared but not assigned a value.
let undefinedVar;
console.log(undefinedVar); // Output: undefined

// 5. Null: Represents the intentional absence of any object value.
let nullVar = null;

// 6. Object: Represents a collection of properties and methods.
let obj = {
  name: "John",
  age: 30,
};

// 7. Symbol: A unique and immutable primitive value.
let sym = Symbol("unique");

// 8. BigInt: Represents whole numbers larger than 2^53 - 1.
let bigIntNum = BigInt(9007199254740991);

// ECMAScript Standards
// ECMAScript is a standard for scripting languages like JavaScript. The latest version is ECMAScript 2021 (ES12).
// Some features introduced in recent ECMAScript versions include:

// ES6 (2015): let, const, arrow functions, template literals, classes, modules, etc.
let es6Feature = `Template literals in ES6`;
let name = "Ahmed";
let greeting = `Hello, ${name}! Welcome to JavaScript learning.`; // Template literals
console.log(greeting); // Output: Hello, Ahmed! Welcome to JavaScript learning.

// ES7 (2016): Array.prototype.includes, exponentiation operator (**)
let includesFeature = [1, 2, 3].includes(2); // true

// ES8 (2017): async/await, Object.entries, Object.values
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  console.log(data);
}

// ES9 (2018): Rest/Spread properties, asynchronous iteration
let { x, y, ...rest } = { x: 1, y: 2, a: 3, b: 4 };

// ES10 (2019): Array.prototype.flat, Object.fromEntries
let arr = [1, [2, 3], [4, 5]];
let flatArr = arr.flat(); // [1, 2, 3, 4, 5]

// ES11 (2020): Optional chaining, Nullish coalescing operator
let user = {};
let userName = user?.name ?? "Guest";

// ES12 (2021): Logical assignment operators, numeric separators
let a = 1;
a ||= 2; // a = 1
let largeNumber = 1_000_000; // 1000000

/*
number = 2 ^ 53 (largest number in JS)
bigint = for large numbers (type = bigint)  (2^53 + 1)
object = collection of properties and methods   (type = object)
string = "assembly of characters"
boolean = true or false
null = stand alone value (type = object)    (intentional absence of any object value)
undefined = kindda place holder for a value which is not defined yet (type = undefined) (variable declared but not assigned a value)
symbol = uniquness (type = symbol) (immutable primitive value) (unique identifier)


"use strict";   treat all code as newer version of JS

JavaScript primarily has six basic data types: Number, String, Boolean, Undefined, Null, and Object. Additionally, ES6 introduced Symbol for unique identifiers,
and ES2020 introduced BigInt for large integers. 

ECMAScript standards are crucial as they define the specifications for JavaScript. Key milestones include ES6 in 2015, which introduced major features like
arrow functions, let/const, and classes. ES2017 brought in async/await for better asynchronous programming.
*/