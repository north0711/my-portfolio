document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("calculate-bmi");

    if (!button) return;

    button.addEventListener("click", () => {

        const height = Number(document.getElementById("height").value);
        const weight = Number(document.getElementById("weight").value);

        const bmiValue = document.getElementById("bmi-value");
        const bmiCategory = document.getElementById("bmi-category");

        if (height <= 0 || weight <= 0) {
            bmiValue.textContent = "BMI：--";
            bmiCategory.textContent = "Please enter valid values.";
            return;
        }

        const bmi = weight / Math.pow(height / 100, 2);

        bmiValue.textContent = "BMI：" + bmi.toFixed(1);

        if (bmi < 18.5) {
            bmiCategory.textContent = "Underweight";
        } else if (bmi < 25) {
            bmiCategory.textContent = "Normal";
        } else if (bmi < 30) {
            bmiCategory.textContent = "Overweight";
        } else {
            bmiCategory.textContent = "Obese";
        }

    });

});