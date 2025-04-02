let myName = "Ahmed     ";
console.log(myName.length);

// Object.prototype.trueLength = (varString)=>{
//     return varString.trim().length
// }

// console.log(myName.trueLength());

//Arrow Function Issue in Object.prototype.trueLength
//When defining a method in Object.prototype, you need to use function instead of an arrow function.
//Arrow functions do not bind this, so varString.trim() won’t work properly.

/*
this Should Be Used Instead of varString
Since you are adding trueLength to Object.prototype, the function should work on any string object.
Using this will refer to the calling object (e.g., myName).
*/

Object.prototype.trueLength = function () {
  return this.trim().length;
};

console.log(myName.trueLength());

// Object.prototype.ahmedAddition = function () {
//   return this+"Ahmed";
// };

Array.prototype.ahmedAdditionArr = function () {
  return this.map((item) => `${item}Ahmed`);
};

const superHeroes = ["Thor", "Hulk", "SpiderBoy"];

console.log(superHeroes.ahmedAdditionArr());
