//Arrays In JavaScript:
/*
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using
nonnegative integers (or their respective string form) as indexes.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the
value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies,
rather than deep copies).
*/

/*
Shallow copy
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the
source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other
object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

More formally, two objects o1 and o2 are shallow copies if:

They are not the same object (o1 !== o2).
The properties of o1 and o2 have the same names in the same order.
The values of their properties are equal.
Their prototype chains are equal.
*/

/*
Deep copy
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the
source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing
the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the
source or the copy may cause the other object to change too.

Two objects o1 and o2 are structurally equivalent if their observed behaviors are the same. These behaviors include:

The properties of o1 and o2 have the same names in the same order.
The values of their properties are structurally equivalent.
Their prototype chains are structurally equivalent (although when we deal with structural equivalence, these objects are usually plain objects,
meaning they both inherit from Object.prototype).

Structurally equivalent objects can either be the same object (o1 === o2) or copies (o1 !== o2). Because equivalent primitive values always
compare equal, you cannot make copies of them.
*/

const myArr = [0, 1, 2, 3, true, "Ahmed"];
console.log(`myArr[5]: ${myArr[5]}`);

const myHeros = ["spiderman", "Batman", "Thor"];

const myArr2 = new Array(1,2,3,4,5);
console.log(`myArr2: ${myArr2}`);


//Array Methods:
myArr.push(6); //It adds the element at the end of the array
myArr.pop(); //It removes the last element from the Array 
myArr.unshift(9); //it adds the element at the start of the Array
myArr.shift(); //It removes the first element from the Array
myArr.includes(9); //It will search the array and returns a Boolean based on the result
myArr.indexOf(9); //It will return the index of the elemnt '9' in this case.
// If the element does not exists in the Array it will return -1. 

console.log(`myArr: ${myArr}`);
console.log(`myArr.includes(9): ${myArr.includes(9)}`);
console.log(`myArr.indexOf(9): ${myArr.indexOf(9)}`);
const newArr = myArr.join(); //The returning value "newArr" will be a string
console.log(`newArr: ${newArr}`);
console.log(`typeOf(newArr): ${typeof(newArr)}`);

//Slice, Splice
console.log(`A: ${myArr}`)

const myn1 = myArr.slice(1,3); //It will slice and bring the elements from index 1 to 2, 3 will be excluded
console.log(`myn1: ${myn1}`);

const myn2 = myArr.splice(1,3);  //It will bring the elemnts from index 1 to 3, 3 will be included
//It basically asks for starting index, delete count and it can also add another element at the place of deleted element
// The difference between slice and splice is that splice manipulates the original Array and cuts the values from the original Array
console.log(`myn2: ${myn2}`);


console.log(`A: ${myArr}`)
