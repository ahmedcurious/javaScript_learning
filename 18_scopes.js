// let a = 10;
// const b = 20;
// var c = 30;

{} //This area is called a Scope. A function or conditional statements have scopes

if(true){
  let a = 10
  const b = 20
  var c = 30
  let d = 400 //this value declared using 'let' will always stay inside this scope and will not conflict with other value
  console.log("d inside Block Scope:",d)
} //The code and variables written inside are 'Block Scope'

let d = 40; //these variables declared outside any scope are called 'Global Scope'
console.log("d outside at Global Scope:",d);

// console.log(a); //Error: 'a' is not defined. 'let' is limited by the scope it's declared in

// console.log(b); //Error: 'b' is not defined. 'const' is limited by the scope it's declared in

console.log(c); //returns 30 on the console. 'var' is not limited by the scope it's declared in
// This is why 'var' is permitted to use in modern javaScript.

//The Core Scope inside browser console is different than the Global Scope inside Node.js development environment
