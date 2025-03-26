function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(6));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// .prototype gives us internal method and properties of an Object
//this means "current context". By this we also refer to the .prototype of the object

function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  console.log(`${this.userName} Increment successful!`);
};

createUser.prototype.printMe = function () {
  console.log(`${this.userName}'s score is ${this.score}`);
};

const chai = new createUser("chai", 50);
const tea = new createUser("tea", 250);

tea.increment();
tea.printMe();

chai.increment();
chai.increment();
chai.printMe();