function mostrar() {
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("Este mes tiene 28 días");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;

	}
}

/* 
28 días: Febrero
30 días: Abril, Junio, Septiembre y Noviembre
31 días: Enero, Marzo, Mayo, Julio, Agosto, Octubre y Noviembre
*/