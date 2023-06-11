document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("mailInput");
  inputElement.value = "";
});

let input = document.getElementById("mailInput");
let submitBtn = document.getElementById("btn");
let errorMsg = document.getElementById("errMsg");
let address = document.getElementById("address");
let dismissBtn = document.getElementById("btnTwo");

input.addEventListener("input", function () {
  let inputVal = input.value;

  if (inputVal === "" || !validateEmail(inputVal)) {
    // errorMsg.style.visibility = "visible";
    // input.classList.add("error");
    // input.classList.remove("good");
  } else {
    errorMsg.style.visibility = "hidden";
    input.classList.add("good");
    input.classList.remove("error");
  }
});

submitBtn.addEventListener("click", function () {
  let inputVal = input.value;

  if (inputVal === "" || !validateEmail(inputVal)) {
    errorMsg.style.visibility = "visible";
    input.classList.add("error");
    input.classList.remove("good");
  } else {
    document.getElementById("hero").style.visibility = "hidden";
    address.innerHTML = inputVal;
    let success = (document.getElementById("success").style.visibility =
      "visible");
  }
});

dismissBtn.addEventListener("click", function () {
  window.location.reload();
});

function validateEmail(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}
