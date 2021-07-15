function mostrar() {
	let nota = Math.floor(Math.random() * 10 + 1);

	if (nota >= 9) {
		alert("EXCELENTE, tu nota es: " + nota);
	} else if (nota >= 4) {
		alert("APROBO, tu nota es: " + nota);
	} else {
		alert("Vamos, la proxima se puede. Tu nota es: " +nota);
	}
}
