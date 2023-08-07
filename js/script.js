// variables
let age = document.querySelector(".age_input");
let job = document.querySelector(".job_input");
let salary = document.querySelector(".salary_input");
let button = document.querySelector(".check_btn");
let result = document.querySelector(".result");

// button event listener
age.value = "";
job.value = "";
salary.value = "";
button.addEventListener("click", function () {
  if (age.value >= 18 && age.value < 40) {
    if (job.value.toLowerCase() === "yes") {
      if (salary.value >= 20000) {
        result.innerHTML = "Badhai ho bete";
        result.style.color = "green";
        age.value = "";
        job.value = "";
        salary.value = "";
      } else {
        result.innerHTML = "Age income barao";
        result.style.color = "yellow";
      }
    } else {
      result.innerHTML = "MEYER BABA JUTA PITA KORBE";
      result.style.color = "red";
    }
  } else if (age.value >= 40) {
    result.innerHTML = "Ebar Asha Charo";
    result.style.color = "purple";
  } else {
    result.innerHTML = "Dure ja shala";
    result.style.color = "red";
  }
});