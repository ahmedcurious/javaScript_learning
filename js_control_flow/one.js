//if Conditional Statements

if (true) {
  //scope
  //if the condition is true than this code block will execute
}

const isUserLoggedin = true;

if (isUserLoggedin) {
  console.log(`User login status = ${isUserLoggedin}`);
}

const temperature = 51;

if (temperature < 50) {
  console.log(`Temperature is ${temperature}c`);
} else {
  console.log(`temperature is higher than 50c`);
}

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`); //it gives error: "power" is not defined.
// "power" variable is defined in "if" condition's scope and can't be accessed outside it.

//Shorthand notation for if statement
const balance = 1000;

if (balance > 500) console.log("Correct Balance, using shorthand notation");
//In this short hand syntax the scope is implicit in single line

if (balance < 500) console.log("balance < 500");
else if (balance < 750) console.log("balance < 750");
else if (balance < 900) console.log("balance < 900");
else console.log("balance < 1200");



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail =  true;

if(userLoggedIn && debitCard && 2==3) console.log("Allowed to buy items");

if(loggedInFromGoogle || loggedInFromEmail) console.log("User Logged In");