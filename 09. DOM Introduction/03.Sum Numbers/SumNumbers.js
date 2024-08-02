function calc() {
    // Retrieve input values and convert them to numbers
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Calculate the sum
    var result = num1 + num2;

    // Display the result in the output field
    document.getElementById('sum').value = result;
}

