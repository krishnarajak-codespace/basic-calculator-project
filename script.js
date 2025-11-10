const expr = document.getElementById("expression");
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".btn");

// Button click handler
buttons.forEach(button => {
  button.addEventListener("click", () => handleInput(button.dataset.value));
});

// Keyboard support
document.addEventListener("keydown", e => {
  const key = e.key;
  if (/[\d+\-*/.^()%=]|Enter|Backspace/.test(key)) {
    handleInput(key === "Enter" ? "=" : key);
  }
});

function handleInput(value) {
  if (value === "C") {
    expr.value = "";
    output.textContent = "";
  } 
  else if (value === "DEL" || value === "Backspace") {
    expr.value = expr.value.slice(0, -1);
  } 
  else if (value === "=") {
    try {
      let expression = expr.value
        .replace(/√/g, "Math.sqrt")
        .replace(/π/g, "Math.PI")
        .replace(/\^/g, "**");
      let result = eval(expression);
      if (isNaN(result) || !isFinite(result)) throw "Error";
      output.textContent = "= " + result;
    } catch {
      output.textContent = "Error";
    }
  } 
  else {
    expr.value += value;
  }
}
