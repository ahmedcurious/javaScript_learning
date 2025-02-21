let score = 33; //(ValueInNumber = 33) 
// let score = "33"; (ValueInNumber = 33)
// let score = "33abc"; (ValueInNumber = NaN)
// let score = null; (ValueInNumber = 0)
// let score = undefined; (ValueInNumber = NaN)
// let score = true; (valueInNumber = 1)
// let score = false; // (valueInNumber = 0)
// let score = Symbol("unique"); // Error: Cannot convert a Symbol value to a number
// let score = BigInt(9007199254740991); //(ValueInNumber = 9007199254740991)
// let score = { name: "John", age: 30 }; //(ValueInNumber = NaN)
// let score = [1, 2, 3];//(ValueInNumber = NaN)
// let score = () => {}; //(ValueInNumber = NaN)


console.log(typeof score);
console.log(typeof(score)); 
console.log(typeof score === "number"); 
console.log(typeof score === "string"); 
console.log(typeof score === "boolean"); 
console.log(typeof score === "object"); 
console.log(typeof score === "bigint"); 
console.log(typeof score === "symbol"); 
console.log(typeof score === "undefined"); 
console.log(typeof score === "null"); 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// let isLoggedIn = 1; // (Boolean = true)
// let isLoggedIn = 0; // (Boolean = false)
// let isLoggedIn = "ahmed"; // (Boolean = true)
// let isLoggedIn = ""; // (Boolean = false)
// let isLoggedIn = null; // (Boolean = false)
let isLoggedIn = undefined; // (Boolean = false)

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Boolean: "+booleanIsLoggedIn);


let someNumber = 33;

let stringNumber = String(someNumber);
console.log("Type Of string Number: "+typeof stringNumber);
console.log("String Number Value: "+stringNumber);