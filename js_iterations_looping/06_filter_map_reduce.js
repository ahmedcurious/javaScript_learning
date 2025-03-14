const coding_languages = ["ruby", "py", "java", "js", "go"];

const values = coding_languages.forEach((item) => item); //forEach does not return a value

console.log(values); //it gives undefined

console.log("*****************************************************************");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNums = myNums.filter((num) => num > 4);

console.log(filteredNums);

console.log("*****************************************************************");

const books = [
  {
    title: "The Silent Patient",
    genre: "Thriller",
    publish: 2019,
    edition: "First",
  },
  {
    title: "Atomic Habits",
    genre: "Self-Help",
    publish: 2018,
    edition: "Second",
  },
  { title: "Dune", genre: "Science Fiction", publish: 1965, edition: "Third" },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    publish: 1960,
    edition: "First",
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: 1925,
    edition: "Fourth",
  },
];

const userBooks = books.filter((bk) => bk.genre === "Fiction");

console.log(userBooks);

console.log("*****************************************************************");

const userBooksYear = books.filter((bk)=>bk.publish>=2000 && bk.genre === "Thriller");

console.log(userBooksYear);