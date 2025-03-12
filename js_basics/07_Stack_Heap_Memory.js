// Stack Vs Heap Memory

// Stack Memory (Primitive Data Types) (Static Memory Allocation):
// - Stack memory is used to store local variables and function calls
// - Stack memory is used for static memory allocation
// - Stack memory is used for static memory management
// - Stack memory is used for static memory deallocation
// - Stack memory is used for static memory release
// - Stack memory is used for static memory freeing
// - Stack memory is used for static memory recycling
// - Stack memory is used for static memory garbage collection
// - Stack memory is used for static memory cleanup

let myYoutubename = "chaicode";

let anotherName = myYoutubename; // a copy of myYoutubename is stored in anotherName in Stack Memory.
// The original value of myYoutubename is not changed. (Primitive Data Types)

console.log("anotherName initial value: " + anotherName); // chaicode
anotherName = "harryCoder"; // anotherName value is changed to "harryCoder" in Stack Memory.
// The original value of myYoutubename is not changed. (Primitive Data Types)

console.log("myYoutubename value: " + myYoutubename); // chaicode
console.log("anotherName latter value: " + anotherName); // harryCoder


// Heap Memory (Reference Data Types) (Dynamic Memory Allocation):
// - Heap memory is used to store reference data types
// - Heap memory is used for dynamic memory allocation
// - Heap memory is used for dynamic memory management
// - Heap memory is used for dynamic memory deallocation
// - Heap memory is used for dynamic memory release
// - Heap memory is used for dynamic memory freeing
// - Heap memory is used for dynamic memory recycling
// - Heap memory is used for dynamic memory garbage collection
// - Heap memory is used for dynamic memory cleanup

let userOne = {
  email: "user@email.com",
  paymentId: "userPaymentId",
};

let userTwo = userOne; // a reference of userOne is stored in userTwo in Heap Memory.
// The original value of userOne is changed. (Reference Data Types)

userTwo.email = "ahmed@email.com"; // This will change the value of email in userTwo and userOne. (Reference Data Types)
// The original value of userOne is changed. (Reference Data Types)


let userThree = userTwo; // a reference of userTwo is stored in userThree in Heap Memory.
// The original value of userOne is changed. (Reference Data Types)

userThree.paymentId = "ahmedPaymentId"; // userThree value is changed to "ahmedPaymentId" in Heap Memory.
// The original value of userOne is changed. (Reference Data Types)

console.log("userOne.email: "+userOne.email); 
console.log("userTwo.email: "+userTwo.email);

console.log("userOne.paymentId: "+userOne.paymentId);
console.log("userTwo.paymentId: "+userTwo.paymentId);
console.log("userThree.paymentId: "+userThree.paymentId);

console.log("userOne: ", userOne);
console.log("userTwo: ", userTwo);
console.log("userThree: ", userThree);

/*
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.
*/

/*
Stack Memory: It stores local variables and function calls. It is used for static memory allocation, management, deallocation,
release, freeing, recycling, garbage collection, and cleanup. It is used for primitive data types. It creates a copy of the variable,
when the copy is changed the original variable value is unchanged.

Heap Memory: It stores reference data types. It is used for dynamic memory allocation, management, deallocation, release, freeing,
recycling, garbage collection, and cleanup. It is used for reference data types. It stores the reference of the variable, when the
reference is changed the original variable value is changed.
*/
