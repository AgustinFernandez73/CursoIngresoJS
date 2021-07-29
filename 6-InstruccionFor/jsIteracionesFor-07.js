function mostrar() {
	let i;
	let num;
	let cantidadDivisores = 0;

	num = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(num)) {
		num = parseInt(prompt("ERROR, ingrese un numero: "));
	}

	for (i = 1; i <= num; i++) {

		if (num % i == 0) {
			cantidadDivisores++;
			console.log(i)
		}
	}

	console.log("Cantidad de divisores encontrados: " + cantidadDivisores);

}