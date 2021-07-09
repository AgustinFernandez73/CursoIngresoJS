function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 17) {
		if (edad >= 13) {
			alert("La persona es un adolescente");
		}


	}

}

/* Otra forma de resolverlo es:

let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

if  (edad <= 13 && edad >= 17) {
	alert("La persona no es adolescente")
} */