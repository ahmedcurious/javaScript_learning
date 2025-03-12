let value=3;
let negValue=-value;
console.log(negValue);
console.log(typeof negValue);

console.log("*************************************************************************************************");

console.log("2+2 = "+(2+2));
console.log("2-2 = "+(2-2));
console.log("2*2 = "+(2*2));
console.log("2**2 = "+(2**2)); // 2^2 = 4
console.log("2/2 = "+(2/2));
console.log("2%2 = "+(2%2)); // 2%2 = 0 (Remainder) so 2 is completely divisible by 2.
console.log("2%3 = "+(2%3)); // 2%3 = 2 (Remainder) so 2 is not completely divisible by 3.
console.log("2/0 = "+(2/0)); // Infinity
console.log("-2/0 = "+(-2/0)); // -Infinity
console.log("0/0 = "+(0/0)); // NaN (Not a Number)

console.log("*************************************************************************************************");

let str1 = "hello"
let str2 = "ahmed"
let str3 = str1 + " " + str2;
console.log(str3);

console.log("*************************************************************************************************");

console.log("1" + 2); // 12 (String concatenation) so 1 is treated as string.
console.log(1 + "2"); // 12 (String concatenation) so 2 is treated as string.
console.log("1" + 2 + 2); // 122 (String concatenation) so 1 is treated as string.
console.log(1 + 2 + "2"); // 32 (String concatenation) so 2 is treated as string.
console.log("1" + (2 + 2)); // 14 (String concatenation) so 1 is treated as string. use () to change the order of operation.
console.log(1 + "2" + 2); // 122 (String concatenation) so 2 is treated as string.

console.log("*************************************************************************************************");

console.log((3 + 4) * 5 %  3); // 2 (Modulus) so 3 is treated as number.
console.log(((3 + 4) * 5) % 3) // 2 (Modulus) so 3 is treated as number.
console.log(3 + 4 * 5 % 3); // 4 (Modulus) so 3 is treated as number.
console.log(3 + (4 * 5) % 3); // 4 (Modulus) so 3 is treated as number.
console.log(3 + 4 * (5 % 3)); // 7 (Multiplication) so 3 is treated as number.
console.log(3 + 4 * 5 % 3); // 4 (Modulus) so 3 is treated as number.  

console.log("*************************************************************************************************");

console.log("1" - 2); // -1 (Subtraction) so 1 is treated as number.
console.log(1 - "2"); // -1 (Subtraction) so 2 is treated as number.
console.log("1" * 2); // 2 (Multiplication) so 1 is treated as number.

console.log("*************************************************************************************************");

console.log(+true); // 1 (Unary plus) so true is treated as number.
console.log(+false); // 0 (Unary plus) so false is treated as number.
console.log(+null); // 0 (Unary plus) so null is treated as number.
console.log(+undefined); // NaN (Unary plus) so undefined is treated as number.
// console.log(+Symbol("unique")); // Error: Cannot convert a Symbol value to a number
console.log(+"");   // 0 (Unary plus) so empty string is treated as number.
console.log(+"abc"); // NaN (Unary plus) so string is treated as number.

console.log("*************************************************************************************************");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);
console.log(num2);
console.log(num3);
let gameCounter = 100;

gameCounter++; //postfix increment operator (gameCounter = gameCounter + 1) so gameCounter = 101
++gameCounter; //prefix increment operator (gameCounter = gameCounter + 1) so gameCounter = 102
console.log(gameCounter);

// Example to explain the difference between postfix and prefix increment operator
let a = 5;
let b = 5;

console.log(a++); // 5 (postfix: returns the value before incrementing)
console.log(a);   // 6 (value after incrementing)

console.log(++b); // 6 (prefix: increments the value before returning)
console.log(b);   // 6 (value after incrementing)