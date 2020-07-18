/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
   
    let Fahrenheit;
    let centígrados;

    Fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    centígrados = (Fahrenheit - 32) * 5 / 9;
    

    alert(+Fahrenheit+"º Fahrenheit son " +centígrados.toFixed(1)+ "º centígrados");


}

function CentigradosFahrenheit() {

    let Fahrenheit;
    let centígrados;

    centígrados = parseFloat(document.getElementById("txtIdTemperatura").value);

    Fahrenheit = (centígrados * 9 / 5) + 32;
    

    alert(+centígrados+"º centígrados son " +Fahrenheit.toFixed(1)+ "º Fahrenheit");
    


}
