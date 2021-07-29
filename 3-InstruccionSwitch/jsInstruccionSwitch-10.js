function mostrar() {
	let destino;
	let estacion;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {

		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("Se viaja a " + destino + " en " + estacion);
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("No se viaja a " + destino + " en " + estacion);
					break;
			}

			break;

		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja a " + destino + " en " + estacion);
					break;
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja a " + destino + " en " + estacion);
					break;
			}

			break;

		case "Otoño":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
				case "Bariloche":
				case "Cordoba":
					alert("Se viaja a " + destino + " en " + estacion);
					break;
			}

			break;

		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja a " + destino + " en " + estacion);
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert("Se viaja a " + destino + " en " + estacion);
					break;
			}

			break;
	}
}