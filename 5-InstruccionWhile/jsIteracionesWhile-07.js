/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let respuesta;
	let numero;
	let contador = 0;
	let acumulador = 0;
	let promedio;

	do {

		numero = parseInt(prompt("Ingrese un número: "));

		acumulador += numero;
		contador++;

		respuesta = prompt("Quiere elegir otro numero?").toLowerCase();

	} while (respuesta == "si");

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}