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

if  (edad <= 17 && edad >= 13) {
	alert("La persona es adolescente")
}

Otra forma:

if (!(edad > 17 || edad < 13)) {
	alert("Es adolescente");
} */