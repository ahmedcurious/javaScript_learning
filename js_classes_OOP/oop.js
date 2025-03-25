class Ahmed {
  constructor() {
    this.name = "Ahmed";
  }
}

const ahdClass = new Ahmed();
// console.log(ahdClass.name);

const user = {
  userName: "Ahmed",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log(`username: ${this.userName}`);
  },
};
// user.getUserDetails();

class User {
  constructor(userName, signedIn) {
    this.userName = userName;
    this.signedIn = signedIn;
  }
  greeting() {
    return `Hello ${this.userName}! Welcome Back`;
  }
}

const userOne = new User("Ahmed", 9);
console.log(userOne);
console.log(userOne.greeting());

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car("Suzuki", "Cultus", 2012);

console.log("auto instanceof Car:", auto instanceof Car);
console.log("auto instanceof Object:", auto instanceof Object);
