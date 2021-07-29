function mostrar() {
	let precioBase = 15000;
	let precioTotal;
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch (estacion) {

		case "Invierno":
			switch (destino) {
				case "Bariloche":
					precioTotal = precioBase * 20 / 100 + precioBase;
					alert("El precio total es: $" + precioTotal);
					break;
				case "Cataratas":
				case "Cordoba":
					precioTotal = precioBase - precioBase * 10 / 100;
					alert("El precio total es: $" + precioTotal);
					break;
				case "Mar del plata":
					precioTotal = precioBase - precioBase * 20 / 100;
					alert("El precio total es: $" + precioTotal);
					break;
			}

			break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
					precioTotal = precioBase - precioBase * 20 / 100;
					alert("El precio total es: $" + precioTotal);
					break;
				case "Cataratas":
				case "Cordoba":
					precioTotal = precioBase * 10 / 100 + precioBase;
					alert("El precio total es: $" + precioTotal);
					break;
				case "Mar del plata":
					precioTotal = precioBase * 20 / 100 + precioBase;
					alert("El precio total es: $" + precioTotal);
					break;
			}

			break;

		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					precioTotal = precioBase * 10 / 100 + precioBase;
					alert("El precio total es: $" + precioTotal);
					break;
				case "Cordoba":
					precioTotal = precioBase
					alert("El precio total es: $" + precioTotal);
					break;
			}

			break;

	}

}
