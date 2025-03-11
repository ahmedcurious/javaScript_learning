const user = {
    username: "ahmed",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to the website!`)
        console.log(this) //it will return the whole context of the scope
    },
}

// "THIS" keyword is used to get the current context of the scope
// it can be used to access all the variables in that scope

user.welcomeMsg();
user.username = "usman"; //Here the context is updated
user.welcomeMsg(); //This will return the updated context value

console.log("this:",this); //In a Node.js development environment
// "this" in a Global Scope will return an empty Object "{}"

//The Global Object inside a Browser environment is called "Window Object"
// If we console.log(this) in a browser environment it will return a "window object"

console.log("************************************************")

function chai(){
    console.log("this inside chai function:",this)
} //when we call "this" inside a function scope. It returns a Global Object containing multiple methods

chai();

function chai_2(){
    let username = "ali"
    console.log(this.username) //this keyword does not work properly in a function scope
    //it gives "undefined" as it's not able to access the "username" variable through "this" keyword
}

chai_2();

console.log("************************************************")

const chai_arrow = () => {
    let username = "ahmed"
    console.log("this inside chai_arrow():",this) //when calling "this" in an arrow function
    // it returns an empty object "{}" unlike a normal function, arrow function treats "this" differently
};

chai_arrow();

() => {} //absolute basic arrow function syntax
// we can also hold it in a variable

const addTwo = (num1 , num2) => {return num1+num2}; //This is a basic arrow function syntax
//If curly braces are used then "Return" statement is compulsory

console.log("addTwo(6,9):",addTwo(6,9));


const addThree = (num1,num2,num3) => num1+num2+num3; //This is called as "Implicit Return" syntax
//Here the end curly braces "{}" are removed and also "Return" keyword is not used
// This mostly works with a short code that occupies a single line like above example

console.log("addThree(1,2,3):",addThree(1,2,3));


const multiplyTwo = (num1, num2) => (num1*num2); //Another third way to use Arrow function syntax
//Here paranthesis are used around the function code at the end "(num1*num2)"
//When using paranthesis "(num1*num2)", "Return" keyword is not used
//But when curly braces "{Return}" are used "Return" keyword is compulsory 

console.log("multiplyTwo(6,9)):",multiplyTwo(6,9));



const objectReturn = (uname, number) => ({username:uname,number:number}); 
//To return an object from an Arrow function then paranthesis "()" are used, otherwise it will return undefined
//This syntax is very commonly used in React.js

console.log("objectReturn('ahmed',25)):",objectReturn("ahmed",25));