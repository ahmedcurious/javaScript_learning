// for

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) console.log("5 is the best number!");
  console.log(element);
}

console.log("*********************************************")

for (let i = 0; i <= 10; i++) {
  console.log(`Outer Loop Value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner Loop Value: ${j}, Outer Loop Value: ${i}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("*********************************************")

let myArray = ["flash", "batman", "superman", "Arrow"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

console.log("*********************************************")

// Break and continue keywords

//Break
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("5 detected!");
    break; //it stops the loop
  }
  console.log(`Value of i is ${i}`);
}

console.log("*********************************************")

//Continue
for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("5 detected!");
    continue;//it does not stops the loop, first time the condition is met
  }
  console.log(`Value of i is ${i}`);
}
