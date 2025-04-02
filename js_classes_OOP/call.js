function setUserName(username) {
  //complex db calls
  this.username = username;
  console.log("setUserName function called");
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("Ahmed", "ahmed@email.com", "123456");
console.log(chai);
