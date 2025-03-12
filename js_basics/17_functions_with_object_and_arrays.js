function calculated_cart_price(num1) {
  return num1;
} // This will only return num1 and will not return other values passed with num1

console.log(calculated_cart_price(1)); //This way it will work fine
console.log(calculated_cart_price(200, 400, 600)); //Now it will only return the first value

console.log("\n*************************\n");

// The solution to this issue is using a "Rest Operator( ... )"
// "..." this is also the syntax for "Spread Operator" but both have different use cases

function calculated_cart_price_withRestOperator(...num1) {
  return num1;
} // This will return the single and multiple values for num1
// It will return an Array

console.log(calculated_cart_price_withRestOperator(200)); //returns array with single value
console.log(calculated_cart_price_withRestOperator(200, 400, 600)); //returns array with all values

console.log("\n*************************\n");

// Another intersting case with Rest Operator "..." but with multiple arguments

function calculated_cart_price_Rest_Multiple_Arguments(val1, val2, ...num1) {
  return num1;
} //In this case if we pass one value, it will be assigned to "val1"
// If we pass two values, fisrt value = "val1" & second value = "val2"
// If we pass three or more values, fisrt value = "val1", Second value = "val2" &
// Third value and furthermore values will be added to the "num1" Array

console.log(calculated_cart_price_Rest_Multiple_Arguments(200));
//empty array is returned because we're not returning the values of "val1"

console.log(calculated_cart_price_Rest_Multiple_Arguments(200, 400));
//empty array is returned because we're not returning the values of "val1" & "val2"

console.log(calculated_cart_price_Rest_Multiple_Arguments(200, 400, 300));
//array with one value is returned because first two values have gone to "val1" & val2

console.log("\n*************************\n");

const user = {
  username: "Ahmed",
  price: 200,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
} //it will give error if the passed value is not a object, because there is no type check in place

handleObject(user); //we can pass existing object with the same keys as coded in the function

handleObject({
  username: "Ali",
  price: 250,
}); //or we can pass a new object directly as function perameter

handleObject(["username", "price"]); // now it will give "undefined" for both username and price
handleObject(200, "Ali"); // now it will give "undefined" for both username and price

console.log("\n*************************\n");

function handleObject_withTypeCheck(anyObject) {
  if (
    typeof anyObject !== "object" ||
    anyObject === null ||
    Array.isArray(anyObject)
  ) {
    console.log("Please enter a valid object");
    return;
  }
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
} // This function will be able to check the type of the perameter given

handleObject_withTypeCheck(["username", "price"]); //now it will prompt user to give an object
handleObject_withTypeCheck(user);
handleObject_withTypeCheck({
  1: "Ahd",
  2: "Dhd",
}); //Now this will give undefined because the keys of the object given does not match with the keys set

console.log("\n*************************\n");

function handleObject_withTypeCheck_withObjectKeyCheck(anyObject) {
  if (
    typeof anyObject !== "object" ||
    anyObject === null ||
    Array.isArray(anyObject)
  ) {
    console.log("Please enter a valid Object");
    return;
  } else if (!("username" in anyObject)) {
    console.log("The Object does not have a key 'username'");
    return;
  } else if (!("price" in anyObject)) {
    console.log("The object does not have a 'price' attribute");
    return;
  } else {
    console.log(
      `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
  }
}

handleObject_withTypeCheck_withObjectKeyCheck(user);
handleObject_withTypeCheck_withObjectKeyCheck({
  1: "Ahd",
  2: "Dhd",
  3: "Ahd",
}); //now it will give error regarding the length of the object
handleObject_withTypeCheck_withObjectKeyCheck({
  1: "Ahd",
  2: "Dhd",
}); //it will give error regarding the first key of the object
handleObject_withTypeCheck_withObjectKeyCheck({
  username: "Ahmed",
  2: 3,
});

// Test Cases
handleObject_withTypeCheck_withObjectKeyCheck(["username", "price"]); // Invalid: Array
handleObject_withTypeCheck_withObjectKeyCheck(null); // Invalid: null
handleObject_withTypeCheck_withObjectKeyCheck({ name: "Ahmed", cost: 100 }); // Invalid: Wrong keys
handleObject_withTypeCheck_withObjectKeyCheck({ username: "Ahmed", price: 100 }); // Valid
handleObject_withTypeCheck_withObjectKeyCheck({ username: "Ahmed", price: 100, extra: "data" }); // Valid (allows extra keys)

console.log("\n*************************\n");

const myNewArray = [200, 400, 600];

function returnSecondValue(anyArray){
    console.log(`The Second Value is ${anyArray[1]}`)
    return
};

returnSecondValue(myNewArray);
returnSecondValue([400,800,600]);