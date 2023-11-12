function calculateFactorial() {
    // Obtener el valor ingresado por el usuario
    var number = parseInt(document.getElementById("number").value);

    // Validar que se ingresó un número positivo
    if (isNaN(number) || number < 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    // Calcular el factorial
    var factorial = 1;
    var i = 1;

    // Bucle do-while para calcular el factorial
    do {
        factorial *= i;
        i++;
    } while (i <= number);

    // Mostrar el resultado en la página
    showResults(factorial);
}

function showResults(factorial) {
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = "<p>El factorial es: " + factorial + "</p>";
}
