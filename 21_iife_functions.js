//Immediately Invoked Function Expression (IIFE)

function chai() {
  console.log("Database Connected");
} //this is a normal function syntax. This will not be Immediately invoked
chai(); //We have to call it to invoke it.
//This will make things polluted in Global Scope

//Named IIFE
(function chai_2() {
  console.log("Immediately Invoked: Database Connected");
})();
//This is an IIFE syntax. It is directly executed witout calling it like a normal function
//(function name(){})()
//(function Definition)(Execution Call)

//IIFE is used to stop or reduce the pollution in global scope due to excessive declarations

//Simple or Unnamed IIFE
(() => {
  console.log(`Arrow Function IIFE Syntax`);
})();
//This is the syntax for arrow functions in an IIFE

(() => console.log("Implicit Return Syntax IIFE"))();
//Single line Arrow Function IIFE Syntax

((num) => console.log(num ** 2))(4);
//Variable values can be passed in the Execution call paranthesis()

((personName) => console.log(`${personName} logged in!`))("Ahmed");

//When writing two IIFE in a file. Make sure you add ";" at the end of each.
//Otherwise there will be issue in execution
