/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let nevoSueldo;
	let aumento;

	//para calcular el nuevo sueldo deberìa sumarle al sueldo original el aumento
	
	sueldo = parseFloat (document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;


}
