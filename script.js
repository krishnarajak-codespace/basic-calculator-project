const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => handleInput(button.dataset.value));
});

document.addEventListener("keydown", e => {
  const key = e.key;
  if (/[\d+\-*/.=]|Enter|Backspace|Delete|%/.test(key)) {
    handleInput(key === "Enter" ? "=" : key);
  }
});

function handleInput(value) {
  if (value === "C") {
    result.value = "";
  } 
  else if (value === "DEL" || value === "Backspace") {
    result.value = result.value.slice(0, -1);
  } 
  else if (value === "=") {
    try {
      let expression = result.value.replace(/√/g, "Math.sqrt");
      result.value = eval(expression);
    } catch {
      result.value = "Error";
    }
  } 
  else if (value === "%") {
    try {
      result.value = eval(result.value) / 100;
    } catch {
      result.value = "Error";
    }
  } 
  else {
    result.value += value;
  }
}
