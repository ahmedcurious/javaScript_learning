// Numbers and Math In JavaScript:
// 1. Numbers // Integers, Floats, NaN, Infinity, -Infinity
// 2. Math Object // Math.PI, Math.round(), Math.ceil(), Math.floor(), Math.min(), Math.max(), Math.random()
// 3. Random Numbers // Math.random()
// 4. Number Methods // toString(), toFixed(), parseInt(), parseFloat()
// 5. Math Methods  // Math.round(), Math.ceil(), Math.floor(), Math.min(), Math.max(), Math.random()
// 6. Math Constants // Math.PI, Math.E, Math.SQRT2, Math.SQRT1_2, Math.LN2, Math.LN10, Math.LOG2E, Math.LOG10E
// 7. Math Functions // Math.abs(), Math.acos(), Math.acosh(), Math.asin(), Math.asinh(), Math.atan(), Math.atanh(),
// Math.atan2(), Math.cbrt(), Math.ceil(), Math.clz32(), Math.cos(), Math.cosh(), Math.exp(), Math.expm1(), Math.floor(),
// Math.fround(), Math.hypot(), Math.imul(), Math.log(), Math.log1p(), Math.log10(), Math.log2(), Math.max(), Math.min(),
// Math.pow(), Math.random(), Math.round(), Math.sign(), Math.sin(), Math.sinh(), Math.sqrt(), Math.tan(), Math.tanh(), Math.trunc()

// 1. Numbers:
// Integers:
let integerNumber = 100; //it will return the integer number
console.log(integerNumber); // 100
// Floats:
let floatNumber = 100.50; //it will return the floating point number
console.log(floatNumber); // 100.50
// NaN:
let notANumber = NaN; //it will return NaN
console.log(notANumber); // NaN
// Infinity:
let infinityNumber = Infinity; //it will return infinity
console.log(infinityNumber); // Infinity
// -Infinity:
let negativeInfinityNumber = -Infinity; //it will return negative infinity
console.log(negativeInfinityNumber); // -Infinity

console.log("***********************************************************************************************************************************")

// 2. Math Object:
// Math.PI:
let piValue = Math.PI; //it will return the value of PI
console.log(piValue); // 3.141592653589793
// Math.round():
let roundValue = Math.round(100.50); //it will return the value of a number rounded to the nearest integer
console.log(roundValue); // 101
// Math.ceil():
let ceilValue = Math.ceil(100.50); //it will return the smallest integer greater than or equal to a given number
console.log(ceilValue); // 101
// Math.floor():
let floorValue = Math.floor(100.50); //it will return the largest integer less than or equal to a given number
console.log(floorValue); // 100
// Math.min():
let minValue = Math.min(0, 150, 30, 20, -8, -200); //it will return minimum value from the given values
console.log(minValue); // -200
// Math.max():
let maxValue = Math.max(0, 150, 30, 20, -8, -200); //it will return maximum value from the given values
console.log(maxValue); // 150
// Math.random():
let randomNumber = Math.random(); //it will generate random number between 0 to 1
console.log(randomNumber); // 0.12345678901234567

console.log("***********************************************************************************************************************************")

// 3. Random Numbers:
// Math.random():
let randomValue = Math.random(); //it will generate random number between 0 to 1
console.log(randomValue); // 0.12345678901234567

console.log("***********************************************************************************************************************************")

// 4. Number Methods:
// toString():
let number = 15;
let numberToString = number.toString(); //it will convert number to string
console.log(numberToString); // 15
// toFixed():
let numberFixed = 15.123456789;
let numberToFixed = numberFixed.toFixed(2); //it will convert number to fixed decimal point
console.log(numberToFixed); // 15.12
// parseInt():
let numberParseInt = parseInt("10.33"); //it will convert string to integer
console.log(numberParseInt); // 10
// parseFloat():
let numberParseFloat = parseFloat("10.33"); //it will convert string to float
console.log(numberParseFloat); // 10.33

console.log("***********************************************************************************************************************************")

// 5. Math Methods:
// Math.round():
let roundNumber = Math.round(4.7); //it will return the value of a number rounded to the nearest integer
console.log(roundNumber); // 5
// Math.ceil():
let ceilNumber = Math.ceil(4.4); //it will return the smallest integer greater than or equal to a given number
console.log(ceilNumber); // 5
// Math.floor():
let floorNumber = Math.floor(4.7); //it will return the largest integer less than or equal to a given number
console.log(floorNumber); // 4
// Math.min():
let minNumber = Math.min(0, 150, 30, 20, -8, -200); //it will return minimum value from the given values
console.log(minNumber); // -200
// Math.max():
let maxNumber = Math.max(0, 150, 30, 20, -8, -200); //it will return maximum value from the given values
console.log(maxNumber); // 150
// Math.random():
let randomNumberValue = Math.random(); //it will generate random number between 0 to 1
console.log(randomNumberValue); // 0.12345678901234567

console.log("***********************************************************************************************************************************")

// 6. Math Constants:
// Math.PI:
let piValueConstant = Math.PI; //it will return the value of PI
console.log(piValueConstant); // 3.141592653589793
// Math.E:
let eValueConstant = Math.E; //it will return the value of Euler's number
console.log(eValueConstant); // 2.718281828459045
// Math.SQRT2:
let sqrt2ValueConstant = Math.SQRT2; //it will return the square root of 2
console.log(sqrt2ValueConstant); // 1.4142135623730951
// Math.SQRT1_2:
let sqrt1_2ValueConstant = Math.SQRT1_2; //it will return the square root of 1/2
console.log(sqrt1_2ValueConstant); // 0.7071067811865476
// Math.LN2:
let ln2ValueConstant = Math.LN2; //it will return the natural logarithm of 2
console.log(ln2ValueConstant); // 0.6931471805599453
// Math.LN10:
let ln10ValueConstant = Math.LN10; //it will return the natural logarithm of 10
console.log(ln10ValueConstant); // 2.302585092994046
// Math.LOG2E:
let log2eValueConstant = Math.LOG2E; //it will return the base 2 logarithm of E
console.log(log2eValueConstant); // 1.4426950408889634
// Math.LOG10E:
let log10eValueConstant = Math.LOG10E; //it will return the base 10 logarithm of E
console.log(log10eValueConstant); // 0.4342944819032518

console.log("***********************************************************************************************************************************")

// 7. Math Functions:
// Math.abs():
let absValue = Math.abs(-4.7); //it will return the absolute value of a number
console.log(absValue); // 4.7
// Math.acos():
let acosValue = Math.acos(0.5); //it will return the arccosine of a number
console.log(acosValue); // 1.0471975511965979
// Math.acosh():
let acoshValue = Math.acosh(2); //it will return the hyperbolic arccosine of a number
console.log(acoshValue); // 1.3169578969248166
// Math.asin():
let asinValue = Math.asin(0.5); //it will return the arcsine of a number
console.log(asinValue); // 0.5235987755982989
// Math.asinh():
let asinhValue = Math.asinh(1); //it will return the hyperbolic arcsine of a number
console.log(asinhValue); // 0.881373587019543
// Math.atan():
let atanValue = Math.atan(0.5); //it will return the arctangent of a number
console.log(atanValue); // 0.4636476090008061
// Math.atanh():
let atanhValue = Math.atanh(0.5); //it will return the hyperbolic arctangent of a number
console.log(atanhValue); // 0.5493061443340549
// Math.atan2():
let atan2Value = Math.atan2(8, 4); //it will return the arctangent of the quotient of its arguments
console.log(atan2Value); // 1.1071487177940904
// Math.cbrt():
let cbrtValue = Math.cbrt(8); //it will return the cube root of a number
console.log(cbrtValue); // 2
// Math.ceil():
let ceilValueFunction = Math.ceil(4.4); //it will return the smallest integer greater than or equal to a given number
console.log(ceilValueFunction); // 5
// Math.clz32():
let clz32Value = Math.clz32(0); //it will return the number of leading zero bits in the 32-bit binary representation of a number
console.log(clz32Value); // 32
// Math.cos():
let cosValue = Math.cos(0); //it will return the cosine of a number
console.log(cosValue); // 1
// Math.cosh():
let coshValue = Math.cosh(0); //it will return the hyperbolic cosine of a number
console.log(coshValue); // 1
// Math.exp():
let expValue = Math.exp(1); //it will return the value of E^x
console.log(expValue); // 2.718281828459045
// Math.expm1():
let expm1Value = Math.expm1(1); //it will return the value of E^x - 1
console.log(expm1Value); // 1.718281828459045
// Math.floor():
let floorValueFunction = Math.floor(4.7); //it will return the largest integer less than or equal to a given number
console.log(floorValueFunction); // 4
// Math.fround():
let froundValue = Math.fround(5.5); //it will return the nearest single precision float representation of a number
console.log(froundValue); // 5.5
// Math.hypot():
let hypotValue = Math.hypot(3, 4); //it will return the square root of the sum of squares of its arguments
console.log(hypotValue); // 5
// Math.imul():
let imulValue = Math.imul(2, 4); //it will return the result of a 32-bit integer multiplication
console.log(imulValue); // 8
// Math.log():
let logValue = Math.log(2); //it will return the natural logarithm of a number
console.log(logValue); // 0.6931471805599453
// Math.log1p():
let log1pValue = Math.log1p(1); //it will return the natural logarithm of 1 + x
console.log(log1pValue); // 0.6931471805599453
// Math.log10():
let log10Value = Math.log10(2); //it will return the base 10 logarithm of a number
console.log(log10Value); // 0.3010299956639812
// Math.log2():
let log2Value = Math.log2(2); //it will return the base 2 logarithm of a number
console.log(log2Value); // 1
// Math.max():
let maxValueFunction = Math.max(0, 150, 30, 20, -8, -200); //it will return maximum value from the given values
console.log(maxValueFunction); // 150
// Math.min():
let minValueFunction = Math.min(0, 150, 30, 20, -8, -200); //it will return minimum value from the given values
console.log(minValueFunction); // -200
// Math.pow():
let powValue = Math.pow(2, 3); //it will return the value of x to the power of y
console.log(powValue); // 8
// Math.random():
let randomValueFunction = Math.random(); //it will generate random number between 0 to 1
console.log(randomValueFunction); // 0.12345678901234567
// Math.round():
let roundValueFunction = Math.round(4.7); //it will return the value of a number rounded to the nearest integer
console.log(roundValueFunction); // 5
// Math.sign():
let signValue = Math.sign(-4); //it will return the sign of a number
console.log(signValue); // -1
// Math.sin():
let sinValue = Math.sin(0); //it will return the sine of a number
console.log(sinValue); // 0
// Math.sinh():
let sinhValue = Math.sinh(0); //it will return the hyperbolic sine of a number
console.log(sinhValue); // 0
// Math.sqrt():
let sqrtValue = Math.sqrt(9); //it will return the square root of a number
console.log(sqrtValue); // 3
// Math.tan():
let tanValue = Math.tan(0); //it will return the tangent of a number
console.log(tanValue); // 0
// Math.tanh():
let tanhValue = Math.tanh(0); //it will return the hyperbolic tangent of a number
console.log(tanhValue); // 0
// Math.trunc():
let truncValue = Math.trunc(4.7); //it will return the integer part of a number
console.log(truncValue); // 4

console.log("***********************************************************************************************************************************")

const score = 400;
const balance = new Number(100); //it will return the number object (Number {100})
console.log(balance); // Number {100}
console.log(typeof balance); // object

console.log(balance.toString()); // 100
console.log(typeof balance.toString()); // string
console.log(balance.toFixed(1)) // 100.0

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // 123.9 //it will return the number with a specified length

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 //it will return the number with a comma separator (By default it will use the american standard)
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 //it will return the number with a comma separator (After using "en-IN" it will use the indian standard)

console.log("****************M A T H S****************");

console.log(Math); // it will return the Math object
console.log(typeof Math); // object
console.log(Math.abs(-4.7)); // 4.7 //it will return the absolute value of a number (Negative to Positive but not positive to negative)
console.log(Math.round(4.7)); // 5 //it will return the value of a number rounded to the nearest integer
console.log(Math.round(4.3)); // 4 //it will return the value of a number rounded to the nearest integer
console.log(Math.ceil(4.1)); // 5 //it will return the smallest integer greater than or equal to a given number (It will always return the next integer)
console.log(Math.floor(4.9)); // 4 //it will return the largest integer less than or equal to a given number (It will always return the previous integer)
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200 //it will return minimum value from the given values
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150 //it will return maximum value from the given values
console.log(Math.random()); // it will generate random number between 0 to 1
console.log((Math.random()*10) + 1); // it will generate random number between 1 to 10
console.log(Math.floor((Math.random()*10) + 1)); // it will generate random number between 1 to 10 (It will always return the previous integer)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min) + min)); // it will generate random number between 10 to 20
// (this formula is used to generate random number between two numbers)