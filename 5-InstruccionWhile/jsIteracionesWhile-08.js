/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numero;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	let seguir;
	let flag = 0;

	do {

		numero = parseInt(prompt("Ingrese un número: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("No ingresaste un número, vuelva a intentarlo: "));
		}

		if (numero >= 0) {
			acumuladorPositivos += numero;
		} else {
			flag = 1;
			acumuladorNegativos *= numero;
		}

		seguir = prompt("¿Desea ingresar otro numero? s / n").toLowerCase();

	} while (seguir == "s")

	if (flag == 0) {
		acumuladorNegativos = 0
	}

	document.getElementById("txtIdSuma").value = acumuladorPositivos;
	document.getElementById("txtIdProducto").value = acumuladorNegativos;

}

// Estrategia de resolución

// 1- Declaro variables (Numero / Acumulador de - / Acumulador de + / Seguir)
// 2- Generar un bucle del tipo mientras el usuario quiera (do-while)
// 3- // Cosas que se tienen que hacer dentro del bucle (o sea mientras que el usuario quiera)
// 3.1- Pido un número
// 3.2- Valido que sea un número
// 3.3- Analizo el signo del número.
// Si es positivo--> Lo sumo a los demas positivos
// Si es negativo--> Lo multiplico con los demás negativos
// --------------------------------------------------------------------------------------------
// 4- Cosas que tengo que hacer después que el usuario no quiere ingresar más valores
// 4.1- Muestro los resultados