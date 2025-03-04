const tinderUser = new Object(); // singleton Object

const tinderUser2 = {}; //Non Singleton Object

// Both methods will return an empty Object: {}

tinderUser.id = "001";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log("tinderUser:", tinderUser);
console.log("tinderUser2:", tinderUser2);

const regularUser = {
  email: "ahmed@email.com",
  fullName: {
    userFullName: {
      firstName: "Ahmed",
      lastName: "Naseem",
    },
  },
};

console.log("regularUser.fullName:", regularUser.fullName); //
console.log(
  "regularUser.fullName.userFullName:",
  regularUser.fullName.userFullName
); //
console.log(
  "regularUser.fullName.userFullName.firstName:",
  regularUser.fullName.userFullName.firstName
); //

console.log(
  "regularUser.fullName?.userFullName:",
  regularUser.fullName?.userFullName
);
//Better Syntax, it checks if the value exists (Proceeds if true only) Used in APIs as well
console.log(
  "regularUser.fullName?.userFullName?.firstName:",
  regularUser.fullName?.userFullName?.firstName
); //

const obj_1 = {
  1: "a",
  2: "b",
};
const obj_2 = {
  3: "a",
  4: "b",
};

const obj_3 = { obj_1, obj_2 }; //this is not a good way to merge two objects. The objects are not merged inside obj_3.
console.log("obj_3:", obj_3); //obj_3: { obj_1: { '1': 'a', '2': 'b' }, obj_2: { '3': 'a', '4': 'b' } }

const obj_4 = Object.assign({}, obj_1, obj_2); //Object.assign() is a method to add a source object into a target object
// The first value acts as the target, here in this case "{}" and "obj_1" & "obj_2" are the source
// It is a good practice to give an empty object("{}") as the first perameter, so all the other objects are merged into that empty object
console.log("obj_4:", obj_4);

const obj_5 = { ...obj_1, ...obj_2 }; //By using the spread operator(...) we can merge multiple objects into a single object
console.log("obj_5:", obj_5); //obj_4: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
  {
    id: 1,
    email: "ahd@gmail.com",
  },
  {
    id: 2,
    email: "ahd@gmail.com",
  },
  {
    id: 3,
    email: "ahd@gmail.com",
  },
];

console.log("users[1].email:", users[1].email);

console.log("Object.keys(tinderUser):",Object.keys(tinderUser)); //Object.keys method returns all values of Object's Keys as an Array which can be looped
console.log("Object.values(tinderUser):",Object.values(tinderUser)); //Object.values method returns all values of Object's value as an Array which can be looped
console.log("Object.entries(tinderUser):",Object.entries(tinderUser)); //Object.entries method returns all values of Object's key and value as saperate array
// [key, value] in this format it returns a nested Array having each key & value in it's saperate Array

console.log("tinderUser.hasOwnProperty('isLoggedIn'):", tinderUser.hasOwnProperty('isLoggedIn')); //This checks if an object contains a particular value and returns a Boolean
