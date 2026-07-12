const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height!";
    } 
    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight!";
    } 
    else {
        const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));

        if (bmi <= 18.5) {
            result.innerHTML = `Your BMI is <strong>${bmi}</strong><br><p>Underweight</p>`;
        } 
        else if (bmi <= 24.9) {
            result.innerHTML = `Your BMI is <strong>${bmi}</strong><br><p>Normal Weight</p>`;
        } 
        else if (bmi <= 29.9) {
            result.innerHTML = `Your BMI is <strong>${bmi}</strong><br><p>Overweight</p>`;
        } 
        else {
            result.innerHTML = `Your BMI is <strong>${bmi}</strong><br><p>Obese</p>`;
        }
    }
});