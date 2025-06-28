function convertTemperature() {
    // Get input values
    const tempInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    // Validate input
    if (isNaN(tempInput)) {
        alert('Please enter a valid number for temperature');
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert from the original unit to all others
    switch(unit) {
        case 'celsius':
            celsius = tempInput;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'fahrenheit':
            fahrenheit = tempInput;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            kelvin = tempInput;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    // Display results with 2 decimal places
    document.getElementById('celsius-result').textContent = celsius.toFixed(2);
    document.getElementById('fahrenheit-result').textContent = fahrenheit.toFixed(2);
    document.getElementById('kelvin-result').textContent = kelvin.toFixed(2);

    // Show results section
    document.getElementById('results').style.display = 'block';
}
