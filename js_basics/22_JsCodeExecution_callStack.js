//There is a topic in JavaScript called "JavaScript Execution Context"
//"Execution context means that whatever Js file we've created, how would javaScript run it?"
//from our js code JavaScript Interpreter first makes a "Global Execution Context" everytime
//This "Global Execution Context" is reffered through a variable "this"
//The "Global Execution Context" for browser is different than the development environments
//Different for each environment such as Node.js, bun ,dino etc
//"this" value in a browser environment is always "Window Object"
//"Global Execution Context" is executed in a thread
//JavaScript is a single threaded language
//Everything inside is a process

//1st execution context: "Global Execution Context"
//2nd execution context: "Functional Execution Context"
//3rd execution context: "Eval Execution Context"

//javaScript code runs in two execution phases:
//1st "Memory Creation Phase" or "Creation Phase"
//In this phase all the variables and other declarations are allocated in the Memory.
//2nd "Execution Phase"
//After memory creation, the code is executed in this phase

//Example code for understanding the concepts below:
let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 + num2
    return total
};
let result1 = addNum(val1, val2);
let result2 = addNum(10,2)

//Step by Step code execution in JavaScript:
//1st step: "Global Execution Context" is made and it is assigned to "this" keyword

//2nd step: "Memory Creation Phase", here first each variable is assigned a value of "undefined" first
//val1 = undefined  |  val2 = undefined   |   addNum = function code
//and each function is assigned it's definition code
//This is also called "First Cycle"

//3rd step: "Execution Phase", here the variable will be assigned it's actual value instead of "undefined"
//val1 = 10  |  val2 = 5
//when "addNum" function is first assigned to "result 1" variable. It creates a new "Execution Context" of it's own
//addNum = [New Execution Context]
//In this new Execution Context, "New Variable Environment" + "Execution Thread" are made
//For this function's new Execution Context a new "Memory Phase" + "Execution Phase" are initiated:
// function addNum(num1,num2){
//     let total = num1 + num2
//     return total
// };
//Memory Phase: val1= undefined, val2= undefined, total = undefined
//Execution Phase: num1=10, num2=5, total = 15
//After this the function's execution context is deleted (let result1 = addNum(val1, val2))
//"total" variable will go to "Global Variable Context"

//for "result2" variable which also has a function assigned to it, same process will reinitiate
//let result2 = addNum(10,2)
//addNum(10,2) = [new Execution Context]
//In this new Execution Context, "New Variable Environment" + "Execution Thread" are made
//For this function's new Execution Context a new "Memory Phase" + "Execution Phase" are initiated.
//Memory Phase: val1= undefined, val2= undefined, total = undefined
//Execution Phase: num1=10, num2=2, total = 12
//After this the function's execution context is deleted (let result2 = addNum(10,2))
//"total" variable will go to "Global Variable Context"


//******************* Call Stack **************************

//A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser)
// to keep track of its place in a script that calls multiple functions — what function is currently
// being run and what functions are called from within that function, etc.

//Call Stcak follows "lifo"(Last In First Out) approach 

//When one function having another function called inisde it is in call stack the other
// function also stays till the first function is not executed