function calculateMCDyMCM() {
    // Obtener los valores ingresados por el usuario
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    // Validar que se ingresaron números positivos
    if (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
        alert("Por favor, ingrese números enteros positivos.");
        return;
    }

    // Calcular MCD utilizando el algoritmo de Euclides
    var mcd = calculateMCD(number1, number2);

    // Calcular mcm utilizando la relación mcm * MCD = producto de los números
    var mcm = (number1 * number2) / mcd;

    // Mostrar los resultados en la página
    showResults(mcd, mcm);
}

function calculateMCD(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function showResults(mcd, mcm) {
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block';

    resultDiv.innerHTML = "<p>El MCD es: " + mcd + "</p>";
    resultDiv.innerHTML += "<p>El MCM es: " + mcm + "</p>";

}
