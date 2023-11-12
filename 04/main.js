function generatePrimes() {
    // Obtener el valor ingresado por el usuario
    var limit = parseInt(document.getElementById("limit").value);

    // Validar que se ingresó un número positivo
    if (isNaN(limit) || limit <= 0) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    // Generar lista de números primos
    var primes = [];
    for (var i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Mostrar los resultados en la página
    showPrimes(primes);
}

function isPrime(number) {
    var j = 2;
    while (j < number) {
        if (number % j === 0) {
            return false;
        }
        j++;
    }
    return number !== 1;
}

function showPrimes(primes) {
    var resultDiv = document.getElementById("result");
    resultDiv.style.display = 'block';

    if (primes.length > 0) {
        resultDiv.innerHTML = "<p> Números primos: " + primes.join(", ") + "</p>";
    } else {
        resultDiv.innerHTML = "<p> No hay números primos en el rango especificado.</p>";
    }
}
