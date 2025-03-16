const allButtons = document.querySelectorAll(".button");
const body = document.querySelector("body");

allButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log("Default Case");
        break;
    }
  });
});
