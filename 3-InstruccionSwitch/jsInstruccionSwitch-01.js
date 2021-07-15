function mostrar() {
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Enero":
			alert("Que comiences bien el año");
			break;
		case "Marzo":
			alert("¡A clases!");
			break;
		case "Julio":
			alert("¡Se vienen las vacaciones!");
			break;
		case "Diciembre":
			alert("¡Felices Fiestas!");
			break;

	}

	/* Sin Sentencia "switch"
	
		if (mes == "Enero") {
			alert("Que comiences bien el año");
		} else if (mes == "Marzo") {
			alert("A Clases");
		} else if (mes == "Julio") {
			alert("Se vienen las vacaciones");
		} else if (mes == "Diciembre") {
			alert("¡Felices fiesta!");
		} 
	*/

}