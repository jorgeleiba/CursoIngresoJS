function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13) { alert("Usted es un niño"); }
	else {
		if (edad > 17) { alert("Usted es un adulto"); }
		else { alert("Usted es un adolescente"); }
	}}

	//Para comprimir el código

	//function mostrar() {
		/*let edad;

		edad = parseInt(document.getElementById("txtIdEdad").value);

		if (edad < 13) { alert("es niño"); }
		else if (edad < 18) { alert("es adulto"); }
		else { alert("es adolescente"); }
	}*/
