let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btnn");
console.log(buttons)
let currentInput = "";
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleButtonClick);
  
}
function handleButtonClick() {
  
  let buttonText = this.textContent;
  if (buttonText === "C") {
    currentInput = "";
    display.value = currentInput;
  } else if (buttonText === "=") {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } else {
    currentInput += buttonText;
    display.value = currentInput;
  }
}