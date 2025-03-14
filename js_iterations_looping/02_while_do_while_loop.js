let index = 0;
while(index <= 10){
    console.log(`Value of index is ${index}`)
    index += 2
}

console.log("*************************************************************************")

let mySuperHeroes = ["batman","Ironman","wonderman","flash"];
let arrIncrement = 0;

while (arrIncrement < mySuperHeroes.length) {
    console.log(`Superhero at Index ${arrIncrement} is ${mySuperHeroes[arrIncrement]}`)
    arrIncrement+=1
}

console.log("*************************************************************************")

let score = 11
do {
    console.log(`The score is ${score}`)
    score++
} while (score<=10);
//In do while loop the code block will execute one time even if the condition is false

