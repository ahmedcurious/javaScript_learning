const myObject = {
  js: "javaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`)
}

console.log("****************************************")

const programming = ["js","cpp","rb","py","java",]

for (const key in programming) {
    console.log(programming[key])
}


const map = new Map();
map.set("PK", "Pakistan");
map.set("IN", "India");
map.set("FR", "France");

//maps are not iterable by default

for (const key in map) {
    console.log(key)
}
//this shows no value because maps are not iterable
