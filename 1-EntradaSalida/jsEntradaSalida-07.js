/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {

	// Declaración de variables
	let numero1;
	let numero2;
	let resultado;

	// Relevos los datos de entrada
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	// Realizo las operaciones
	resultado = numero1 + numero2;

	// Muestro los resultados
	alert("El resultado es " + resultado);
}

function restar() {
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 - numero2;

	alert("El resultado es " + resultado);
}

function multiplicar() {
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	alert("El resultado es " + resultado);
}

function dividir() {
	let numero1;
	let numero2;
	let resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	if (numero2 === 0) {
		alert("No se puede dividir por 0");
	}
	else {
		resultado = numero1 / numero2;
		alert("El resultado es " + resultado);
	}
}

