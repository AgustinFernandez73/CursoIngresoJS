/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numero;
	let respuesta;
	let maximo;
	let minimo;
	let flag = 1;

	do {

		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("No ingresaste un numero, vuelva a intentarlo: "));
		}

		if (flag || numero > maximo) {
			maximo = numero;
		}
		if (flag || numero < minimo) {
			minimo = numero;
			flag = 0
		}

		respuesta = prompt("Quiere ingresar otro numero? s/n");

	} while (respuesta == "s");

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}