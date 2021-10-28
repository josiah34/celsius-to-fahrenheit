
//retrieve element ids from html
let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
// when user increases the celsius number input this function converts the opposite to its 
//fahrenheit equivelant 
celsius.oninput = () => {
    let output = parseFloat(celsius.value) * 9/5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};
//this function converts fahrenheit to its respective value in celsius on the left side
fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5 ) /9;
    celsius.value = parseFloat(output.toFixed(2));
};