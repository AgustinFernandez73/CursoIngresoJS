
function mostrar() {
	let tipo;
	let precio = 0
	let cantidad = 0
	let marca;
	let fabricante;
	let cantAlBarato;
	let fabAlBarato;
	let precioAlBarato = 0;
	let flagAlcohol = 1; 
	let acumA = 0;
	let acumB = 0;
	let acumJ = 0;
	let contadorA = 0;
	let contadorB = 0;
	let contadorJ = 0;
	let promedio;
	let mayorTipo;

	for (let i = 0; i < 5; i++) {

		tipo = prompt("Ingrese un tipo de producto (Barbijo, Jabon, Alcohol): ").toLowerCase();
		while ((tipo != "barbijo") && (tipo != "jabon") && (tipo != "alcohol")) {
			tipo = prompt("ERROR, ingrese tipo de producto (Barbijo, Jabon, Alcohol): ").toLowerCase();
		}

		precio

		cantidad = parseInt(prompt("¿Cuantos quiere comprar?: "));
		while(isNaN(cantidad)) {
			cantidad = parseInt(prompt("ERROR, ingrese la cantidad que quiere adquirir: "));
		}

		marca = prompt("Ingrese marca: ");

		fabricante = prompt("Ingrese fabricante: ");
		
		

		

	}


}

/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

-- ESTRATEGIA DE RESOLUCION --
1- Declarar variables
Cosas que le tengo que pedir al usuario--> tipo/precio/cantidad/marca/fabricante
Punto A---> cantAlBarato/fabAlBarato/precioAlBarato/flagAlcohol
Punto B---> acumA / acumB / acumJ / contadorA / contadorB / contadorJ
Punto C---> acumJ utilizada en el punto B

2- Generar un bucle que se repita 5 veces (for)
Cosas que se tienen que hacer 5 veces (dentro del bucle)
2.1--> Pido tipo / valido tipo
2.2--> Pido precio / valido precio
2.3--> Pido cantidad / valido cantidad
2.4--> Pido marca
2.5--> Pido fabricante

3- Cosas que tengo que hacer hacer para poder contestar el punto A
3.1--> Me fijo si es un alcohol
Si es alcohol me fijo si es la primera vez que se ingresa alcohol o
ya se habia ingresado previamente.
Si es la primera vez cambio el flag, guardo el precio, la cantidad y el fabricante como
alcohol barato y por cada alcohol me fijo si es mas barato que el que ya tengo como
barato y de ser así actualizos los datos de alcohol barato.
3.2--> Me fijo el tipo de producto (barbijo/alcohol/jabon) y actualizo el acumulador y el
contador según corresponda

4- Cosas que tengo que hacer despues del for
Me fijo cual fue el tipo con mas unidades vendidas y calculo el promedio



*/