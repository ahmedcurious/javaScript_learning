// Primitive Data Types In JavaScript:
// 7 Primitive Data Types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
//
let num = 42; // Number
let str = "Hello, World!"; // String
let isTrue = true; // Boolean
let isFalse = false; // Boolean
let undefinedVar; // Undefined
let nullVar = null; // Null
let sym = Symbol("unique"); // Symbol
let bigIntNum = BigInt(9007199254740991); // BigInt
//
console.log(typeof num); // Output: number
console.log(typeof str); // Output: string
console.log(typeof isTrue); // Output: boolean
console.log(typeof isFalse); // Output: boolean
console.log(typeof undefinedVar); // Output: undefined
console.log(typeof nullVar); // Output: object (a bug in JavaScript) (null is an object)
console.log(typeof sym); // Output: symbol
console.log(typeof bigIntNum); // Output: bigint

console.log("*************************************************************************************************");

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // Output: false
// Symbols are unique and immutable values that are often used as object property keys. Each symbol is unique, even if they have the same description.

console.log("*************************************************************************************************");

// The typeof operator returns a string indicating the type of the unevaluated operand.

// Reference Data Types In JavaScript:
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Map
// 7. Set
// 8. WeakMap
// 9. WeakSet
// 10. ArrayBuffer
// 11. SharedArrayBuffer
// 12. DataView
// 13. JSON
// 14. Promise
// 15. Generator
// 16. GeneratorFunction
// 17. AsyncFunction
// 18. Proxy
// 19. Reflect
// 20. Intl
// 21. WebAssembly
// 22. Error
// 23. EvalError
// 24. RangeError
// 25. ReferenceError
// 26. SyntaxError
// 27. TypeError
// 28. URIError
// 29. InternalError
// 30. AggregateError
// 31. Map Iterator
// 32. Set Iterator
// 33. String Iterator
// 34. Array Iterator
// 35. TypedArray
// 36. DataView
// 37. SharedArrayBuffer
// 38. Atomics
// 39. JSON
// 40. ArrayBuffer
// 41. DataView
// 42. Intl
// 43. WebAssembly
// 44. URL
// 45. URLSearchParams
// 46. Headers
// 47. Request
// 48. Response
// 49. Fetch
// 50. ReadableStream
// 51. WritableStream
// 52. TransformStream
// 53. ByteLengthQueuingStrategy
// 54. CountQueuingStrategy
// 55. TextDecoder
// 56. TextEncoder
// 57. AbortController
// 58. AbortSignal
// 59. Event
// 60. CustomEvent
// 61. EventTarget
// 62. ProgressEvent
// 63. EventListener

let obj = {
  name: "John",
  age: 30,
};
let arr = [1, 2, 3];
let func = () => {};
let date = new Date();
let regExp = /test/;
let map = new Map();
let set = new Set();
let weakMap = new WeakMap();
let weakSet = new WeakSet();
let arrayBuffer = new ArrayBuffer(16);
let sharedArrayBuffer = new SharedArrayBuffer(16);
let dataView = new DataView(arrayBuffer);
let promise = new Promise((resolve, reject) => {});
let generator = function* () {};
let generatorFunc = function* () {};
let asyncFunc = async () => {};
let proxy = new Proxy({}, {});
let reflect = Reflect;
let intl = Intl;

console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object
console.log(typeof func); // Output: function (functions are objects) (ES6)
console.log(typeof date); // Output: object
console.log(typeof regExp); // Output: object
console.log(typeof map); // Output: object
console.log(typeof set); // Output: object
console.log(typeof weakMap); // Output: object (ES6)
console.log(typeof weakSet); // Output: object (ES6)
console.log(typeof arrayBuffer); // Output: object (ES6)
console.log(typeof sharedArrayBuffer); // Output: object (ES6)
console.log(typeof dataView); // Output: object (ES6)
console.log(typeof promise); // Output: object (promises are objects) (ES6)
console.log(typeof generator); // Output: function (generators are functions) (ES6)
console.log(typeof generatorFunc); // Output: function (generator functions are functions) (ES8)
console.log(typeof asyncFunc); // Output: function (async functions are functions) (ES8)
console.log(typeof proxy); // Output: object
console.log(typeof reflect); // Output: object
console.log(typeof intl); // Output: object
// The typeof operator returns "object" for reference data types (objects, arrays, functions, dates, etc.) and "function" for function objects.

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly
declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done
at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing,
on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/


/*
JavaScript is a loosely typed language, which means that variables in JavaScript are not directly associated with any particular value type.
This is in contrast to strongly typed languages, where variables are bound to specific data types.
*/

/*
In JavaScript, variables can hold values of different types, and the type of a value can change during the execution of a program.
This is known as dynamic typing or weak typing. JavaScript is a dynamically typed language, which means that variable types are
determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
*/

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       Date  =>  object
*/