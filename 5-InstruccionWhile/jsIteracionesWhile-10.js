/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero;
	let respuesta;
	let acumuladorPositivos = 0
	let cantidadPositivos = 0
	let acumuladorNegativos = 0
	let cantidadNegativos = 0
	let cantidadCeros = 0
	let cantidadPares = 0
	let promedioPos = 0
	let promedioNeg = 0
	let difPositivosNegativos;

	do {

		numero = parseInt(prompt("Ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("No ingresaste un numero, vuelva a intentarlo: "));
		}

		if (numero % 2 == 0) {
			cantidadPares++;
		}
		if (numero == 0) {
			cantidadCeros++;
		} else if (numero > 0) {
			cantidadPositivos++;
			acumuladorPositivos += numero;
		} else {
			cantidadNegativos++;
			acumuladorNegativos += numero;
		}

		respuesta = prompt("¿Quiere ingresar otro numero? s/n");

	} while (respuesta == "s");

	if (cantidadPositivos != 0) {
		promedioPos = acumuladorPositivos / cantidadPositivos;
	}

	if (cantidadNegativos != 0) {
		promedioNeg = acumuladorNegativos / cantidadNegativos;
	}

	difPositivosNegativos = cantidadPositivos - cantidadNegativos;

	alert("Suma de positivos: " + acumuladorPositivos);
	alert("Suma de negativos: " + acumuladorNegativos);
	alert("Cantidad de positivos: " + cantidadPositivos);
	alert("Cantidad de negativos: " + cantidadNegativos);
	alert("Cantidad de ceros: " + cantidadCeros);
	alert("Cantidad de pares: " + cantidadPares);
	alert("Promedio de positivos: " + promedioPos);
	alert("Promedio de negativos: " + promedioNeg);
	alert("Diferencia de positivos y negativos: " + difPositivosNegativos);

}