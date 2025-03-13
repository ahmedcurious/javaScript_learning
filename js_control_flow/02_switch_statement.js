// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Febuary");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Default Case");
    break;
}
// Using "break" keyword is necessary. Without it the code will keep executing till "default"

const monthStr = "April";

switch(monthStr){
    case "January":
        console.log("January");
        break;
    case "February":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;
    default:
        console.log("Default Case");
        break;
}