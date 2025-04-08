class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`This course was added by ${this.username}`);
  }
}

const ahdUser = new User("AhmedNaseem");
const ahdTeacher = new Teacher("AhdTeacher", "teacher@gmail.com", "******");
ahdUser.logMe();
ahdTeacher.addCourse();
ahdTeacher.logMe();