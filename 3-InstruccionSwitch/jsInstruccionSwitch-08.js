function mostrar() {
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {

		case "Bariloche":
		case "Ushuaia":
			alert("En " + destino + " hace frio");
			break;

		case "Mar del plata":
		case "Cataratas":
			alert("En " + destino + " hace calor");
			break;
	}
}