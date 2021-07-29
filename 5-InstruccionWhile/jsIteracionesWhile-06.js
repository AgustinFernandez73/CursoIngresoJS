function mostrar() {
	let numero;
	let contador = 0;
	let acumulador = 0;
	let promedio;

	while (contador < 5) {

		numero = parseInt(prompt("Ingrese un número: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese nuevamente un número: "));
		}

		acumulador += numero;

		contador++;
	}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

}