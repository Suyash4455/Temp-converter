function convertTemperature() {
    
    const tempInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

   
    if (isNaN(tempInput)) {
        alert('Please enter a valid number for temperature');
        return;
    }

    let celsius, fahrenheit, kelvin;

    
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

    
    document.getElementById('celsius-result').textContent = celsius.toFixed(2);
    document.getElementById('fahrenheit-result').textContent = fahrenheit.toFixed(2);
    document.getElementById('kelvin-result').textContent = kelvin.toFixed(2);

   
    document.getElementById('results').style.display = 'block';
}
