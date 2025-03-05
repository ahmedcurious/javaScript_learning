const course = {
  courseName: "js in Hindi",
  price: 999,
  courseInstructor: "Hitesh",
};

const { courseName } = course; //Object Destructuring Syntax. In React the object values are extracted this way
const { price, courseInstructor } = course; //We can destructure to extract multiple values in their variables
const { courseInstructor: instructor } = course; //We can also set a different variable name for the destructured value

console.log("courseName:", courseName);
console.log("price, courseInstructor:", price, courseInstructor);
console.log("instructor:",instructor);

// {
//     "name": "Ahmed",
//     "courseName": "js in Hindi",
//     "price": "free",
// }; 
//json structure. Keys are also string here. This is common API format.

[
    {},
    {},
    {}
]; 
// some APIs are in Array format as well, which contains multiple objects
