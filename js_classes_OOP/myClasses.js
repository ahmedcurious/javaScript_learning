class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.encryptedPassword = this.encryptPassword();
  }

  encryptPassword() {
    let spChr = [];
    for (let i = 32; i <= 126; i++) {
      spChr.push(String.fromCharCode(i));
    }

    return this.password
      .split("")
      .map(
        (char) =>
          spChr[Math.floor(Math.random() * (spChr.length - 1))] +
          char +
          spChr[Math.floor(Math.random() * (spChr.length - 1))] +
          spChr[Math.floor(Math.random() * (spChr.length - 1))]
      )
      .join("");
  }

  deCryptPassword() {
    let decrypted = "";
    for (
      let index = 1;
      index < this.encryptedPassword.split("").length;
      index += 4
    ) {
      decrypted += this.encryptedPassword.split("")[index];
    }
    return decrypted;
  }

  changeUserName() {
    return `@${this.username.toUpperCase()}`;
  }
}


function UserFunc(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserFunc.prototype.encryptPassword = function () {
  let spChr = [];
  for (let i = 32; i <= 126; i++) {
    spChr.push(String.fromCharCode(i));
  }
  
  return this.password
  .split("")
  .map(
      (char) =>
        spChr[Math.floor(Math.random() * (spChr.length - 1))] +
        char +
        spChr[Math.floor(Math.random() * (spChr.length - 1))] +
        spChr[Math.floor(Math.random() * (spChr.length - 1))]
    )
    .join("");
};

      const ahdUser = new User("Ahmed", "ahmed@email.com", "MynewPassWord123$$11@");
      const ahdFuncUser = new UserFunc("Curious","email.com","123456wggw");
      console.log(ahdUser.encryptedPassword);
      console.log(ahdUser.deCryptPassword());
      console.log(ahdUser.changeUserName());
      console.log(ahdFuncUser.username);
      console.log(ahdFuncUser.encryptPassword());
