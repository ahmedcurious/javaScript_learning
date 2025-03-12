console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 === 1); // false strict equality
console.log(2 !== 1); // true strict inequality

console.log("*************************************************************************************************");

console.log("2" > 1); // true (String is converted to number) (loose equality)
console.log("03" > 1); // true (String is converted to number) (loose equality)
console.log("2" < 1); // false (String is converted to number) (loose equality)
console.log("2" >= 1); // true (String is converted to number) (loose equality)
console.log("2" < 1); // false (String is converted to number) (loose equality)
console.log("2" <= 1); // false (String is converted to number) (loose equality)
console.log("2" == 1); // false (String is converted to number) (loose equality)
console.log(2 == "2"); // true (String is converted to number) (loose equality)
console.log(2 === "2"); // false strict equality (String is not converted to number) (strict equality)
console.log(2 != "2"); // false (String is converted to number) (loose equality)
console.log(2 !== "2"); // true strict inequality (String is not converted to number) (strict inequality)

console.log("*************************************************************************************************");

console.log(null > 0); // false (null is converted to 0) (loose equality)
console.log(null == 0); // false (null is converted to 0) (loose equality)
console.log(null >= 0); // true (null is converted to 0) (loose equality)
console.log(null < 0); // false (null is converted to 0) (loose equality)
console.log(null <= 0); // true (null is converted to 0) (loose equality)
console.log(null == undefined); // true (null and undefined are equal) (loose equality)
console.log(null === undefined); // false (null and undefined are not equal) (strict equality)
console.log(null != undefined); // false (null and undefined are equal) (loose equality)
console.log(null !== undefined); // true (null and undefined are not equal) (strict inequality) 

console.log("*************************************************************************************************");

console.log(undefined == 0); // false (undefined is converted to NaN) (loose equality)
console.log(undefined == null); // true (undefined and null are equal) (loose equality)
console.log(undefined === 0); // false (undefined is converted to NaN) (strict equality)
console.log(undefined === null); // false (undefined and null are not equal) (strict equality) 
console.log(undefined > 0); // false (undefined is converted to NaN) (loose equality)
console.log(undefined >= 0); // false (undefined is converted to NaN) (loose equality)
console.log(undefined <= 0); // false (undefined is converted to NaN) (loose equality)
console.log(undefined < 0); // false (undefined is converted to NaN) (loose equality)

/*
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number,
treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal
each other and don’t equal anything else. That’s why (2) null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.
*/