/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	let sueldo;
	let descuento;
	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = sueldo * 0.25;
	nuevoSueldo = sueldo - descuento;

	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);
}