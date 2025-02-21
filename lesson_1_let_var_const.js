const accountId = 144553;
let accountEmail = "ahmed_naseem1@outlook.com";
var accountPassword = "12345";
accountCity = "Karachi";
let accountState;

// accountId = 2345; // Error: Assignment to constant variable. (Cannot change the value of a constant variable)


accountEmail = "hchc@email.com";
accountPassword = "212121";
accountCity = "Lahore";

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope

Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
console.table([group of variables you want to show in tabular form])

*/