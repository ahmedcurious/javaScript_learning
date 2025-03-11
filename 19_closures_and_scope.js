function one(){
    const username= "Ahmed"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); //it gives error because "website" variable is declared in function two()'s scope
    //"website" variable can't be accessed outside function two()'s scope
    two()
};
one();

// In Nested functions like used above, Child function can access the variables of Parent Function
// But the Parent function can't access the variables of a Child function

if(true){
    const username = "ahmed"
    if(username === "ahmed"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website); //it gives error: "website" is not defined
    // website variable is declared inside the nested if statement's scope and can't be accessed outside it
}

// console.log(username); // Here it gives error: "username" is not defined
// username variable is declared inside the iniial if statement's scope and can't be accessed outside it

console.log("************ INTERESTING *************");

console.log(addOne(5)); //This function is successfully accessed before declaration
// It is due to the way it's declared or hoisted into the memory

function addOne(num){
    return num + 1
}

console.log(addTwo(6)); //This function expression is not accessed before declaration and gives error
// It's not hoisted into the memory before declaration
// JavaScript interpreter treats it as a value assigned to a variable
// It only hoists declaration, not function expressions

const addTwo = function(num){
    return num + 2
};// This way of declaring a function by directly assigning it to a
// variable during declaration makes it an "expression" or a "function expression"


//Function expressions are not hoisted in JavaScript because they are treated as values assigned
//to variables, and the JavaScript interpreter only hoists declarations, not the values assigned to them. 
