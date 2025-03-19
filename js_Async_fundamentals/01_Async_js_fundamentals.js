//JavaScript is a Synchrounous language, which means it executes the code line by line.
//But there are some cases where we need to execute the code asynchronously.
//For example, when we are fetching data from an API, we don't know how much time it will take to get the data.
//So, we need to execute the code asynchronously.
//In JavaScript, we can achieve this by using the following methods:
//1. Callbacks
//2. Promises
//3. Async/Await

//1. Callbacks
//A callback is a function that is passed as an argument to another function.
//When the function is done, it will call the callback function.
//Example:
function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetching data...");
    callback("Data fetched successfully!");
  }, 2000);
} //This function will take 2 seconds to fetch the data.
fetchData((data) => {
  console.log(data);
}); //This function will be called after the data is fetched.

//2. Promises
//Promises are used to handle asynchronous operations in JavaScript.
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Example:
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Fetching data...");
    resolve("Data fetched successfully!");
  }, 2000);
});
fetchData.then((data) => {
  console.log(data);
}); //This function will be called after the data is fetched.

//3. Async/Await
//Async/Await is a modern way of handling asynchronous operations in JavaScript.
//It is built on top of Promises.
//Example:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching data...");
      resolve("Data fetched successfully!");
    }, 2000);
  });
}
async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData(); //This function will be called after the data is fetched.

//In the above example, the fetchData function returns a Promise, and the getData function is an async function that uses the await keyword to wait for the Promise to be resolved.
//This makes the code more readable and easier to understand.

//Javascript is also a single-threaded language, which means it can only execute one task at a time.
//But we can achieve parallelism by using Web Workers.
//Web Workers are a way to run JavaScript code in the background, without blocking the main thread.
//This allows us to perform computationally intensive tasks without affecting the user experience.

//JavaScript has an execution context:
//it makes "Global Execution Context" first and then "Functional Execution Context"
// and "Eval Execution Context" are made.
//JavaScript code runs in two execution phases:
//1. Memory Creation Phase or Creation Phase
//In this phase, all the variables and other declarations are allocated in memory.
//2. Execution Phase
//After memory creation, the code is executed in this phase

//It also uses a Call Stack


//Blocking code vs non-blocking code:

//Blocking Code: It blocks the flow of the program (Reads file Synchronously)
//Example:
const fs = require("fs");
const data = fs.readFileSync("file.txt");
console.log(data.toString());
console.log("Program Ended");

//Non-Blocking Code: It doesn't block the flow of the program (Reads file Asynchronously)
//Example:
const fs = require("fs");
fs.readFile("file.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("Program Ended");   


//JavaScript engine is primarily made of "Memory Heap" and "Call Stack"
//Web API only exists inside the browser
//Web API is used to make the code asynchronous
//Node.js has "C++ API" instead of "Web API"
//Node.js is a runtime environment for JavaScript
//Node.js has "libuv" library to make the code asynchronous
//Node.js has "Event Loop" to make the code asynchronous
//Node.js has "Callback Queue" to make the code asynchronous
//Node.js has "Task Queue" to make the code asynchronous

//Task Queue is also known as "Callback Queue". It makes javaScript fast and asynchronous.
//Task Queue is also known as "Microtask Queue" in the case of Promises.
//Task Queue is also known as "Job Queue" in the case of Async/Await.

//Promises have a different queue called "Promise Queue" or "High Priority Queue"
//Promises are executed before Callbacks in the Task Queue.

//setTimeout() is a Web API function that is used to make the code asynchronous.
//It is used to delay the execution of a function.
//Register Callback is a queue where setTimeout() is stored.
//Register Callback pushes the tasks to "Task Queue" after the time is completed.
//Task Queue pushes the tasks to "Call Stack" after the "Call Stack" is empty.
//Call Stack executes the tasks in the order they are pushed.

//Event Loop is a process that checks the "Call Stack" and "Task Queue".
//It pushes the tasks from "Task Queue" to "Call Stack" when the "Call Stack" is empty.

//fetch() API also works on the task Queue
//fetch API has a concept named promise