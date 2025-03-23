const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB Calls, cryptography
  setTimeout(() => {
    console.log("Async Task Completed");
    resolve();
  }, 1000);
});

// .then gives us a callback function
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1100);
}).then(() => console.log("Async 2 resolved"));

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Ahmed", email: "ahmed@email.com" });
  }, 1200);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ state: "resolved", code: 69 });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  }, 1300);
});

promiseFour
  .then((data) => {
    console.log(data);
    return data.state;
  })
  .then((state) => {
    console.log(state);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Promise either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "JavaScript", password: "123" });
    } else {
      reject("JavaScript Error!!!!");
    }
  }, 1400);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function getGithubUsers() {
  try {
    const response = await fetch("https://api.github.com/users/ahmedcurious");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getGithubUsers();
