const form = document.querySelector('#bmiForm');
form.addEventListener('submit', function (NoSub) {
    NoSub.preventDefault(); // taaki refresh na ho jaaye
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultBox = document.getElementById("result");
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultBox.innerText = 'Please enter valid height and weight.';
        resultBox.className = "text-red-500 mt-6 text-center text-lg font-medium";
        return;
    }
    const bmi = weight / ((height / 100) ** 2);
    let category = '';
    let colorClass = "";
    if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = "text-yellow-400";
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        colorClass = "text-green-400";
    } else if (bmi < 29.9) {
        category = 'Overweight';
        colorClass = "text-orange-400";
    } else {
        category = 'Obesity';
        colorClass = "text-red-500";
    }

    resultBox.innerText = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
    resultBox.className = `mt-6 text-center text-lg font-medium ${colorClass}`;

    const minIdealWeight = 18.5 * ((height / 100) ** 2);
    const maxIdealWeight = 24.9 * ((height / 100) ** 2);

    const suggestion = document.getElementById("suggestion");
    suggestion.textContent = `Ideal weight range for your height: ${minIdealWeight.toFixed(1)}kg – ${maxIdealWeight.toFixed(1)}kg`;
    saveBMIToHistory(bmi, category);
displayHistory();


});

function getFormattedTimestamp() {
  const now = new Date();
  return now.toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}
function saveBMIToHistory(bmi, category) {
  const entry = {
    bmi: bmi.toFixed(2),
    category,
    timestamp: getFormattedTimestamp()
  };

  let history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  history.unshift(entry); // Add to beginning
  if (history.length > 5) history.pop(); // Keep only latest 5
  localStorage.setItem("bmiHistory", JSON.stringify(history));
}
function displayHistory() {
  const historyList = document.getElementById("history");
  const clear = document.getElementById("clear");
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];

  historyList.innerHTML = ""; // Clear old content
    
    if (history.length === 0) {
        clear.style.display = "none";
    }
    else clear.style.display = "block";

  history.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.bmi} (${entry.category}) – ${entry.timestamp}`;
    historyList.appendChild(li);
  });
}
displayHistory();
const clearBtn = document.getElementById("clearHistory");

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("bmiHistory");       // Step 1: Remove data
  document.getElementById("history").innerHTML = "";  // Step 2: Clear UI
    document.getElementById("clear").style.display = "none"; // Step 3: Hide clear button
});

