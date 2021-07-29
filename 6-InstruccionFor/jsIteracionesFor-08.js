function mostrar() {
	let i;
	let num;
	let contador = 0;
	
	num = parseInt(prompt("Ingrese un numero: "));
	while(isNaN(num)){
		num = parseInt(prompt("ERROR, ingrese un numero: "));
	}

	for (i = 2; i <= num / 2 ; i++) {
		
		if (!(num % 1)) {
			contador++;
		}
	}

	if (contador == 0) {
		alert(num + " es primo");
	} else {
		alert(num + " no es primo");
	}

}
