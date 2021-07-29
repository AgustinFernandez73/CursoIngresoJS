/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese su sexo ( F para Femenino y M para Masculino )");

	while (!(sexo == "F" || sexo == "M" || sexo == "f" || sexo == "m")) {
		sexo = prompt("Sexo invalido, ingrese su sexo (F o M)");
	}

	document.getElementById("txtIdSexo").value = sexo;
}