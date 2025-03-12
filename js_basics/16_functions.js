const sayMyName = () => {
    console.log("A")
    console.log("H")
    console.log("M")
    console.log("E")
    console.log("D")
}; //Arrow function syntax in javaScript

sayMyName //just a referencce of the function. Function will not be called properly
sayMyName() //Proper way of calling the function

console.log("\n*************************\n")

function addTwoNumbers(number1, number2){ //peramters are defined
    console.log(number1 + number2)
}; //Basic function declaration syntax in JavaScript. This function accepts two Perameters

// addTwoNumbers(2,4); //Calling the function after passing two Arguments

const result = addTwoNumbers(3,5); 
console.log("Result:",result); //it gives "Result: undefined" because by console.log() the values
// on a function does not mean that the function actually returns the value. 
// The correct way is to use the "Return" keyword in the function which will actually return the value
// The value passed by a "Return" keyword can be stored in a variable

console.log("\n*************************\n");

function addTwoNumbers_usingReturn(number1, number2){
    return (number1 + number2);
    console.log("I am Unreachable"); //This code will never execute because the function stops execution when the return statement is reached
};

const result_forReturnKeyWord = addTwoNumbers_usingReturn(5,7); //This variable will successfully store the value
console.log("result_forReturnKeyWord: ",result_forReturnKeyWord)

console.log("\n*************************\n");

function loginUserMessage(userName){
    return `${userName} just logged in!`
}

loginUserMessage("Ahmed"); //This will display nothing, because the value is just returned but it's neither stored in a variable or logged

console.log(loginUserMessage("Ahmed")); //This is the correct way for logging the returned value
console.log(loginUserMessage()); // This will return "undefined" because the value of the
// perameter "userName" is not defined wehen calling the function  

console.log("\n*************************\n");

//To prevent "undefined values" a check can be placed inside the function
function loginUserMessage_withCheck(userName){
    if(userName === undefined){
        return "Please enter a value"
    }
    return `${userName} just logged in!`
};

console.log(loginUserMessage_withCheck());
console.log(loginUserMessage_withCheck("Usman"));

console.log("\n*************************\n");

// Another way the if statement can be written
// This Syntax is commonly used in React and other js frameworks
function loginUserMessage_withCheck_shortIfStatment(userName){
    if(!userName){
        return "Please enter a userName"
    }
    return `${userName} just logged in!`
};

console.log(loginUserMessage_withCheck_shortIfStatment());
console.log(loginUserMessage_withCheck_shortIfStatment("Ali"));

console.log("\n*************************\n");

//We can also set a default value of the function argument
//In that case there will never be an undefined value
//When to value is given, the default value will be shown
function loginUserMessage_withCheck_withdefaultValue(userName="Default Username"){
    if(!userName){
        return "Please enter a UserName!"
    }
    return `${userName} just logged in!`
};

console.log(loginUserMessage_withCheck_withdefaultValue()); //In this case it will return the default value
console.log(loginUserMessage_withCheck_withdefaultValue("Javed Ali")); //Now the value will be updated to the given value