function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        const resultDiv = document.getElementById('result');
        resultDiv.innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
        resultDiv.className = 'result-visible';
    } else {
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = 'Please enter valid weight and height.';
        resultDiv.className = 'result-visible';
    }
}