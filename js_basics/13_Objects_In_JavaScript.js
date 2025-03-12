//Objects In JavaScript

// There are 2 basic ways of declaring an Object:
// 1) Object Literal (singleton is not made)
// 2) Object Constructor (singleton is made)

//Object Literals

const mySymbol = Symbol("$");
console.log("mySymbol: ", mySymbol);
console.log("typeof(mySymbol): ", typeof(mySymbol));

const jsUser = {
  name: "Ahmed",
  "full name": "Ahmed Naseem",
  [mySymbol]: Symbol("$*$"), //This is the correct way of using a Symbol as an Object's Key
  age: 27,
  location: "Karachi",
  email: "ahmed@email.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(`jsUser.email: ${jsUser.email}`);
console.log(`jsUser["email"]: ${jsUser["email"]}`);
console.log(`jsUser["full name"]: ${jsUser["full name"]}`); //String keys like "full name" can't be accessed via object.key
// it can only be accessed using square brackets like object["key"]

console.log("jsUser[mySymbol]: ",jsUser[mySymbol]); //correct way of calling a Symbol through an Object
console.log("typeof(jsUser[mySymbol]): ", typeof(jsUser[mySymbol]));

jsUser.email = "ahmed@curiousity.com" //changin the value of an Object's key
// Object.freeze(jsUser); //this .freeze method will lock the attributes of the object to further changes
jsUser.email = "ahmed@python.com" //chnages won't reflect because the Object is locked.
console.log("jsUser: ",jsUser);

jsUser.greetings = function(){
    console.log("Hello JS User");
};
console.log("jsUser.greetings: ",jsUser.greetings); //Only function Reference, actual function is not called
console.log("jsUser.greetings(): ",jsUser.greetings()); //Here the actual function is called

jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
};
console.log("jsUser.greetingsTwo(): ", jsUser.greetingsTwo());