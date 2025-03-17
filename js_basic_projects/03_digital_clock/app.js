const clock_div = document.querySelector("#clock");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  clock_div.textContent = time;
}, 1000);
