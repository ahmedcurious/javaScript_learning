const coding_languages = ["ruby", "py", "java", "js", "go"];

coding_languages.forEach(function (item, index) {
  console.log(`Array value ${item} at index ${index}`);
});

console.log("************************************************************");

newCoding = [];
coding_languages.forEach((item, index) => newCoding.push(`${index}: ${item}`));

console.log(newCoding);

console.log("************************************************************");

function printMe(item) {
  console.log(`Item printed: ${item}`);
}

newCoding.forEach(printMe); //Here we just need to pass the reference of the function

console.log("************************************************************");

newCoding.forEach((item, index, arr) =>
  console.log(`Index: ${index}, Value: ${item}, Array: ${arr}`)
);

console.log("************************************************************");

const myCoding = [
  {
    languageName: "javaScript",
    fileName: "js",
  },
  {
    languageName: "java",
    fileName: "java",
  },
  {
    languageName: "python",
    fileName: "py",
  },
];

myCoding.forEach((item, index) => console.log(item.languageName));
