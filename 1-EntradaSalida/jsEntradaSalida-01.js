/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

function mostrar() {
	alert("Esto unciona de maravilla");
}

/*
Leiba Jorge
ejercicio 01:
se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
y semuestra el siguient mensaje(por alert):
"el producto XXXX cuesta $xxxx sin aumento, tiene un aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"function mostrar()

function mostrar() {
	let producto;
	let importe;
	let aumento;
	let precioFinal;

	producto = prompt("Ingrese el nombre del producto");
	importe = prompt("Ingrese el importe");
	aumento = prompt("Ingrese el descuento");

	importe = parseInt(importe);
	aumento = parseInt(aumento);

	precioFinal = importe + (importe * aumento / 100);

	alert("el producto " + producto + " cuesta  " + importe + " sin aumento, tiene un aumento de $" + aumento + " y el precio final es: $" + $precioFinal + ", gracias por su compra")

}
/* Leiba Jorge
se pide el ancho y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
mostrar el siguiente mensaje.
"el terreno tiene ??? x ??? su perimetro total es de ??? y la superficie es de ???"

function mostrar() {
	let anchoTerreno;
	let largoTerreno;
	let perimetro;
	let superficie;

	anchoTerreno = prompt("Ingrese el ancho del terreno");
	largoTerreno = prompt("Ingrese el largo del terreno");

	anchoTerreno = parseInt(anchoTerreno);
	largoTerreno = parseInt(largoTerreno);

	perimetro = anchoTerreno * 2 + largoTerreno * 2;

	superficie = anchoTerreno * largoTerreno;

	alert("el terreno tiene " + anchoTerreno + " x " + largoTerreno + " su perimetro total es de " + perimetro + " y la superficie es de " + superficie);
}

/*Leiba Jorge
ejercicio 03:
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"

function mostrar() {
	let importe1;
	let importe2;
	let descuento;
	let suma;
	let total;
	let iva;
	let precioFinal;


	importe1 = prompt("Ingrese el importe Nº1");
	importe2 = prompt("Ingrese el importe Nº2");
	descuento = prompt("Ingrese el descuento");

	importe1 = parseInt(importe1);
	importe2 = parseInt(importe2);
	descuento = parseInt(descuento);

	suma = importe1 + importe2;
	total = suma - descuento;
	iva = total * 0.21;
	precioFinal = total + iva;

	alert("los productos cuestan $" + importe1 + " y $" + importe2 + ", sumados son $" + suma + ",tienen un descuento de " + descuento + " pesos, el precio total con descuento es $" + total + ",el iva es de $" +iva+ " y el precio final con IVA es $" +precioFinal);
}
*/
