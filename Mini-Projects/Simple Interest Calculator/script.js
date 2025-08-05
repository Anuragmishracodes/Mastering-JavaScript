const form = document.getElementById("siForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();    // refresh nahi hoga

  const principal = parseFloat(document.getElementById("principal").value);    // demand input
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const resultBox = document.getElementById("siResult");

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
    resultBox.textContent = "Please enter 34 valid numbers.";
    return;
  }             // validation

  const interest = (principal * rate * time) / 100;      // calculation

  resultBox.innerHTML = `<p>Simple Interest: ₹${interest.toFixed(2)}</p>
  <p>Total Amount: ₹${(principal + interest).toFixed(2)}</p>`;      //showing result
});
