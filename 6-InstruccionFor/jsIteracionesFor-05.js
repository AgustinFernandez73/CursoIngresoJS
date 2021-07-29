function mostrar() {
	let num;

	for (; ;) {

		num = parseInt(prompt("Ingrese un número: "));
		while (isNaN(num)) {
			num = parseInt(prompt("ERROR. Ingrese un número: "));
		}

		if (num == 9) {
			break;
		}

		console.log(num);

	}
}