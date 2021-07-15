function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino) {
		
		case "Bariloche":
			alert(destino + " se encuentra al Oeste del país");
			break;
		case "Mar del plata":
			alert(destino + " se encuentra al Este del país");
			break;
		case "Cataratas":
			alert(destino + " se encuentra en el Norte del país");
			break;
		case "Ushuaia":
			alert(destino + " se encuentra en el Sur del país");
			break;

	}
}