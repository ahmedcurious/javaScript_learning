class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123${this.username}`;
  }
}

const ahmedUser = new User("Ahmed_Naseem");
ahmedUser.logMe();
console.log(ahmedUser.createId());
