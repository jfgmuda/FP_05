function generateLists() {
    // Obtener los valores ingresados por el usuario
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    // Validar que se ingresaron números positivos
    if (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
        alert("Por favor, ingrese números enteros positivos.");
        return;
    }

    // Generar las listas
    var ascendent = [];
    var evenDescendent = [];
    var oddDescendent = [];

    // Lista ascendente
    var i = Math.min(number1, number2);
    while (i <= Math.max(number1, number2)) {
        ascendent.push(i);
        i++;
    }

    // Lista de números pares descendente
    var j = Math.max(number1, number2);
    while (j >= Math.min(number1, number2)) {
        if (j % 2 === 0) {
            evenDescendent.push(j);
        }
        j--;
    }

    // Lista de números impares descendente
    var k = Math.max(number1, number2);
    while (k >= Math.min(number1, number2)) {
        if (k % 2 !== 0) {
            oddDescendent.push(k);
        }
        k--;
    }

    // Mostrar los resultados en la página
    mostrarResultados(ascendent, evenDescendent, oddDescendent);
}

function mostrarResultados(ascendent, evenDescendent, oddDescendent) {
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = "";

    // Mostrar lista ascendent
    resultDiv.innerHTML += "<p>Lista Ascendente: " + ascendent.join(", ") + "</p>";

    // Mostrar lista de números pares descendente
    resultDiv.innerHTML += "<p>Lista Pares Descendente: " + evenDescendent.join(", ") + "</p>";

    // Mostrar lista de números impares descendente
    resultDiv.innerHTML += "<p>Lista Impares Descendente: " + oddDescendent.join(", ") + "</p>";
}
