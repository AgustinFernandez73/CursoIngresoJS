/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precioUno;
    let precioDos;
    let PrecioTres;
    let precioTotal;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    alert("El precio es " + precioTotal);
}
function Promedio() {
    let precioUno;
    let precioDos;
    let PrecioTres;
    let promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio de los tres precios es :" + promedio);
}
function PrecioFinal() {
    let precioUno;
    let precioDos;
    let PrecioTres;
    let resultado;
    let precioFinal;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = precioUno + precioDos + precioTres;
    precioFinal = resultado + resultado * 21 / 100;

    alert("El precio total con el iva incluido es :" + precioFinal);

}