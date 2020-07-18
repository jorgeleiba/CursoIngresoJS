/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let nuevoImporte;
	let descuento;
		
	sueldo = parseFloat (document.getElementById("txtIdImporte").value);

	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;

	importe = parseInt ( document.getElementById("txtIdImporte").Value );

	alert (importe);

	nuevoImporte = importe * 0.75;

	descuento = importe + nuevoImporte;


	document.getElementById("txtIdResultado").value = descuento;
}
