const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const bmiCalculation = (weight / ((height * height) / 10000)).toFixed(1);
  const result = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    result.appendChild(
      document.createTextNode(`Please enter a valid height in cm`)
    );
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.appendChild(
      document.createTextNode(`Please enter a valid weight in kg`)
    );
  } else {
    let bmiMessage;
    let statusColor;
    if (bmiCalculation < 18.6) {
      bmiMessage = "Under Weight";
      statusColor = "blue";
    } else if (bmiCalculation >= 18.6 && bmiCalculation <= 24.9) {
      bmiMessage = "Normal Range";
      statusColor = "green";
    } else if (bmiCalculation > 24.9) {
      bmiMessage = "Over Weight";
      statusColor = "red";
    }
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
    result.style.padding = "16px";
    result.style.borderRadius = "16px";
    result.style.backgroundColor = statusColor;
    result.appendChild(
      document.createTextNode(
        `Your Calculated BMI: ${bmiCalculation} ${bmiMessage}`
      )
    );
  }
});
