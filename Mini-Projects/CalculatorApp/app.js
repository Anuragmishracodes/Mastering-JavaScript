let currentValue = "0";
let previousValue = null;
let operator = null;
let shouldReset = false;

const buttons = document.querySelectorAll("button[type='button']");
const historyDisplay = document.querySelector("section div:nth-child(1)");
const mainDisplay = document.querySelector("section div:nth-child(2)");

function updateDisplay() {
  mainDisplay.textContent = currentValue;
  historyDisplay.textContent =
    previousValue && operator
      ? `${previousValue} ${operator}`
      : "";
}
function handleNumber(num) {
  if (shouldReset) {
    currentValue = num;
    shouldReset = false;
  } else {
    currentValue = currentValue === "0" ? num : currentValue + num;
  }
}
function handleOperator(op) {
  if (operator !== null) calculate();

  previousValue = currentValue;
  operator = op;
  shouldReset = true;
}
function calculate() {
  if (!operator || previousValue === null) return;

  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  let result;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "−":
      result = prev - curr;
      break;
    case "×":
      result = prev * curr;
      break;
    case "÷":
      result = curr === 0 ? "Error" : prev / curr;
      break;
  }

  currentValue = result.toString();
  operator = null;
  previousValue = null;
}
function clearAll() {
  currentValue = "0";
  previousValue = null;
  operator = null;
  shouldReset = false;
}
function backspace() {
  currentValue =
    currentValue.length > 1
      ? currentValue.slice(0, -1)
      : "0";
}
function toggleSign() {
  currentValue =
    currentValue.startsWith("-")
      ? currentValue.slice(1)
      : "-" + currentValue;
}
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();

    if (!isNaN(value)) {
      handleNumber(value);
    }
    else if (["+", "−", "×", "÷"].includes(value)) {
      handleOperator(value);
    }
    else if (value === "=") {
      calculate();
      shouldReset = true;
    }
    else if (value === "C") {
      clearAll();
    }
    else if (value === "⌫") {
      backspace();
    }
    else if (value === "±") {
      toggleSign();
    }

    updateDisplay();
  });
});
updateDisplay();