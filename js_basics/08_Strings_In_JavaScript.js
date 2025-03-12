// Strings in JavaScript
// Strings are used for storing and manipulating text.
// A string is a sequence of characters enclosed in single or double quotes.
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor.
//
// In JavaScript, strings are immutable, which means that once a string is created, it cannot be changed. Any operation that modifies a string
// actually creates a new string.
//
// String Methods:
// 1. length: It returns the length of the string.
// 2. charAt(): It returns the character at the specified index.
// 3. indexOf(): It returns the index of the first occurrence of a specified value in a string.
// 4. charCodeAt(): It returns the Unicode of the character at the specified index.
// 5. toUpperCase(): It converts the string to uppercase.
// 6. toLowerCase(): It converts the string to lowercase.
// 7. includes(): It checks whether a string contains a specified value.
// 8. startsWith(): It checks whether a string starts with a specified value.
// 9. endsWith(): It checks whether a string ends with a specified value.
// 10. search(): It searches a string for a specified value and returns the position of the match.
// 11. match(): It searches a string for a specified value and returns the value found.
// 12. lastIndexOf(): It returns the index of the last occurrence of a specified value in a string.
// 13. slice(): It extracts a part of a string and returns the extracted part in a new string.
// 14. substring(): It extracts the characters from a string, between two specified indices, and returns the new sub string.
// 15. replace(): It replaces a specified value with another value in a string.
// 16. split(): It splits a string into an array of substrings.
// 17. concat(): It joins two or more strings.
// 18. trim(): It removes white spaces from both ends of a string.
// 19. repeat(): It returns a new string with a specified number of copies of the string.
// 20. padEnd(): It pads the current string with another string until the resulting string reaches the given length.
// 21. padStart(): It pads the current string with another string until the resulting string reaches the given length.
//
// String Interpolation or Template Literals:
// String interpolation or template literals is a way to concatenate strings in JavaScript. It allows you to embed expressions inside
// string literals, using the ${variable} syntax. The variable can be a string, number, boolean, object, etc.
//
// String Object:
// In JavaScript, a string is a primitive data type, but it can also be an object. The String object is a wrapper around the primitive
// string data type. It allows you to work with strings as objects.
//
// The String object has several methods that can be used to manipulate strings. Some of the commonly used methods are:
// 1. valueOf(): It returns the primitive value of a String object.
// 2. toString(): It returns a string representing the specified object.
// 3. charAt(): It returns the character at the specified index.
// 4. indexOf(): It returns the index of the first occurrence of a specified value in a string.
// 5. charCodeAt(): It returns the Unicode of the character at the specified index.
// 6. toUpperCase(): It converts the string to uppercase.
// 7. toLowerCase(): It converts the string to lowercase.
// 8. length: It returns the length of the string.
// 9. includes(): It checks whether a string contains a specified value.
// 10. startsWith(): It checks whether a string starts with a specified value.
// 11. endsWith(): It checks whether a string ends with a specified value.
// 12. search(): It searches a string for a specified value and returns the position of the match.

const name1 = "Ahmed"
const repoCount = 20;

console.log(name1 + repoCount + " Value"); //This is not the correct way to concatenate strings in JavaScript.
// The correct way is use String Interpolation or Template Literals.

console.log(`Hello, my name is ${name1.toUpperCase()} and my repo count is ${repoCount}.`); // String Interpolation or Template Literals
// The ${variable} syntax is used to interpolate the value of a variable into a string. The variable can be a string, number, boolean, object, etc.

console.log("***************************************************************************************************************************************")

const gameName = new String("DeM()n!");
console.log(gameName); // Output: [String: 'DeM()n!'] (object)
console.log(typeof gameName); // Output: object
console.log(gameName.valueOf()); // Output: DeM()n!
console.log(gameName.toString()); // Output: DeM()n!
console.log(gameName[0]); // Output: D
console.log(gameName.charAt(0)); // Output: D
console.log(gameName.indexOf("M")); // Output: 2
console.log(gameName.charCodeAt(0)); // Output: 68 (ASCII value of D)
console.log(gameName.__proto__); // Output: [String: '']
console.log(gameName.toUpperCase()); // Output: DEM()N!
console.log(gameName.toLowerCase()); // Output: dem()n!
console.log(gameName.length); // Output: 6
console.log(gameName.includes("M")); // Output: true (checks if the string contains M)
console.log(gameName.startsWith("De")); // Output: true (checks if the string starts with De)
console.log(gameName.endsWith("!")); // Output: true (checks if the string ends with !)
console.log(gameName.search("M")); // Output: 2 (searches for M in the string)
console.log(gameName.match(/M/g)); // Output: [ 'M' ] (searches for M in the string)
console.log(gameName.indexOf("M")); // Output: 2 (first index of M)
console.log(gameName.lastIndexOf("M")); // Output: 4 (last index of M)
console.log(gameName.slice(0, 3)); // Output: DeM (length of 3 characters) (last index is excluded)
console.log(gameName.substring(0, 3)); // Output: DeM (length of 3 characters) (last index is excluded)
console.log(gameName.replace("M", "m")); // Output: Dem()n! (replaces the first occurrence of M with m)
console.log(gameName.replace(/M/g, "m")); // Output: Dem()n! (replaces all occurrences of M with m)
console.log(gameName.split("")); // Output: [ 'D', 'e', 'M', '(', ')', 'n', '!' ] (splits the string at each character) (it gives an array as output)
console.log(gameName.split("M")); // Output: [ 'De', '() // n!' ] (splits the string at M)
console.log(gameName.split("M", 1)); // Output: [ 'De' ] (splits the string at M and returns the first part)
console.log(gameName.concat(" Game")); // Output: DeM()n! Game (concatenates two strings)
console.log(gameName.trim()); // Output: DeM()n! (removes white spaces from start and end of the string)
console.log(gameName.repeat(2)); // Output: DeM()n!DeM()n! (repeats the string 2 times)
console.log(gameName.padEnd(10, "*")); // Output: DeM()n!*** (adds * to the end of the string)
console.log(gameName.padStart(10, "*")); // Output: ***DeM()n! (adds * to the start of the string)
console.log(gameName.bold()); // Output: <b>DeM()n!</b> (makes the text bold)
console.log(gameName.fontcolor("red")); // Output: <font color="red">DeM()n!</font> (changes the color of the text)
console.log(gameName.fontsize(5)); // Output: <font size="5">DeM()n!</font> (changes the size of the text)
console.log(gameName.link("https://www.google.com")); // Output: <a href="https://www.google.com">DeM()n!</a> (creates a link)
console.log(gameName.strike()); // Output: <strike>DeM()n!</strike> (adds a strike through the text)
console.log(gameName.sub()); // Output: <sub>DeM()n!</sub> (subscript)
console.log(gameName.sup()); // Output: <sup>DeM()n!</sup> (superscript)
console.log(gameName.italics()); // Output: <i>DeM()n!</i> (italic)
console.log(gameName.small()); // Output: <small>DeM()n!</small> (small text)
console.log(gameName.big()); // Output: <big>DeM()n!</big> (big text)
console.log(gameName.fixed()); // Output: <tt>DeM()n!</tt> (fixed width text)
console.log(gameName.blink()); // Output: <blink>DeM()n!</blink> (blinking text)
console.log(gameName.fontcolor("red").fontsize(5).bold()); // Output: <b><font size="5" color="red">DeM()n!</font></b> (chaining multiple methods)
console.log(gameName.fontcolor("red").fontsize(5).bold().link("https://www.google.com"));
// Output: <a href="https://www.google.com"><b><font size="5" color="red">DeM()n!</font></b></a> (chaining multiple methods)
console.log(gameName.fontcolor("red").fontsize(5).bold().link("https://www.google.com").strike().sub());
// Output: <a href="https://www.google.com"><strike><sub><b><font size="5" color="red">DeM()n!</font></b></sub></strike></a> (chaining multiple methods)
console.log(gameName.at(0)); // Output: D (returns the character at the specified index)
console.log(gameName.codePointAt(0)); // Output: 68 (returns the Unicode of the character at the specified index)
console.log(gameName.padEnd(10, "*")); // Output: DeM()n!*** (pads the current string with another string until the resulting string reaches the given length)
console.log(gameName.padStart(10, "*")); // Output: ***DeM()n! (pads the current string with another string until the resulting string reaches the given length)
console.log(gameName.anchor("game")); // Output: <a name="game">DeM()n!</a> (creates an anchor)

console.log("***************************************************************************************************************************************")

const newString = gameName.substring(0, 4); // it does not include the last index. Also it ignores negative index.
console.log(newString); // Output: DeM(

const anotherString = gameName.slice(-8,4); // Negative index is used to start from the end of the string.
console.log(anotherString); // Output: DeM(

const anotherNewString = "   a hme d   ";
console.log(anotherNewString.trim()); // Output: a hme d (removes white spaces from start and end of the string) (it will not remove white spaces from the middle of the string)

const url = "https://www.google.com/hitesh%20choudhary";
console.log(encodeURI(url)); 
console.log(decodeURI(encodeURI(url))); // Output: https://www.google.com/hitesh choudhary (decodes the URI)

console.log(url.replace('%20','-')); // Output: https://www.google.com/hitesh-choudhary (replaces %20 with -)
console.log(url.includes('hitesh')); // Output: true (checks if the string contains hitesh)
console.log(url.startsWith('https')); // Output: true (checks if the string starts with https)
console.log(url.endsWith('choudhary')); // Output: true (checks if the string ends with choudhary)
console.log(url.search('choudhary')); // Output: 30 (searches for choudhary in the string)
console.log(url.match(/h/g)); // Output: [ 'h', 'h' ] (searches for h in the string)
console.log(url.indexOf('h')); // Output: 8 (first index of h)