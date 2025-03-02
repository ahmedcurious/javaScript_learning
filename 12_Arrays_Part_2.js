const marvelHeroes = ["Thor","IronMan","Hulk","CaptainAmerica"];
const dcHeroes = ["SuperMan", "Arrow", "BatMan"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[4][2]);

const allHeroes = marvelHeroes.concat(dcHeroes); // .concat returns a new array with all the elements in a single Array
console.log(allHeroes);

//Spread Operator
const all_new_heroes = [...marvelHeroes, ...dcHeroes]; //"..." this is the syntax for spread operator,
//It spreads all the elements of an array
console.log(all_new_heroes);

//array.flat()
const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]];
console.log(another_array);

const another_array_falttened = another_array.flat(Infinity); //flattens the array by listing all the elements of sub arrays in one array
console.log(another_array_falttened);

// .isArray()  .from() .of()
console.log(`Array.isArray("Ahmed"): ${Array.isArray("Ahmed")}`);
console.log(`Array.from("Ahmed"): ${Array.from("Ahmed")}`);
console.log(`Array.from({name: "Ahmed"}): ${Array.from({name: "Ahmed"})}`);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(`Array.of(score1, score2, score3): ${Array.of(score1, score2, score3)}`);
