// for of

const arr = [1, 2, 3, 4, 5, 6, 7];

for (const element of arr) {
  console.log(element);
}

console.log("**********************************************");

const greetings = "Hello World!";

for (const greet of greetings) {
  console.log(greet);
}

console.log("**********************************************");

//Maps

const map = new Map();
map.set("PK", "Pakistan");
map.set("IN", "India");
map.set("FR", "France");

console.log(map);

console.log("**********************************************");

for (const [key, value] of map) {
  console.log(key, " - ", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const element of myObject) {
//     console.log(element)
// }

//Objects are not iterable using for of loop