function mostrar() {
	let i;
	let num;
	let cantidadPares = 0;

	num = parseInt(prompt("Ingrese un numero: "));
	while (isNaN(num)) {
		num = parseInt(prompt("ERROR, ingrese un numero: "));
	}

	for (i = 1; i <= num; i++) {

		if (i % 2 == 0) {
			cantidadPares++;
			console.log(i)
		}
	}

	console.log("Cantidad de pares encontrados: " +cantidadPares);

}