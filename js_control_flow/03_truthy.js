const userEmail = [];

if (userEmail) console.log("Got user email!");
else console.log("Don't have user email");

// falsy values in JavaScript:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values in JavaScript:
"0", "false", " ", [], {}, function(){}, true 

//Checking for empty array
if(userEmail.length === 0)console.log("Array is empty!");

//Checking for empty Object
const emptyObject = {};

if ((Object.keys(emptyObject)).length === 0)console.log("Object is empty!");

//some other truthy value conditions:
//false == 0 | true
//false == '' | true
//0 == '' | true



//Nullish Coalescing Operator (??):
//it works mostly on the basic of "null" and "undefined"

let val1;
let val2;
let val3;
let val4;

val1 = 5 ?? 10 //it will assign the first value because both values are neither null nor undefined
val2 = null ?? 10  //it will assign the second value because first is null
val3 = undefined ?? 15 //it will assign the second value because first is undefined
val4 = null ?? 10 ?? 20 //it will assign the second value, since first is null 

console.log("val1:",val1)
console.log("val2:",val2)
console.log("val3:",val3)
console.log("val4:",val4)



//Terniary Operator (Shorter if/else statement):
// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice>=80 ? console.log("Price less than 80") : console.log("Price more than 80")