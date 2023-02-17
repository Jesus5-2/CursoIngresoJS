/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
 con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
 (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheitIngresados;
    var centigradosCalculados;
    var primerMensajeEntregado;

    fahrenheitIngresados = document.getElementById("txtIdTemperatura").value;

    fahrenheitIngresados = parseFloat(fahrenheitIngresados);

    centigradosCalculados = (fahrenheitIngresados - 32) * 5/9;

    primerMensajeEntregado = (fahrenheitIngresados + " grados Fahrenheit son "); 
    primerMensajeEntregado += (centigradosCalculados.toFixed(1) + " grados centigrados");

    alert(primerMensajeEntregado);
}

function CentigradosFahrenheit () 
{
    var centigradosIngresados;
    var FahrenheitCalculados;
    var segundoMensajeEntregado;

    centigradosIngresados = document.getElementById("txtIdTemperatura").value;

    centigradosIngresados = parseFloat(centigradosIngresados);

    FahrenheitCalculados = centigradosIngresados * 9/5 + 32;

    segundoMensajeEntregado = (centigradosIngresados + " grados centigrados son ");
    segundoMensajeEntregado += (FahrenheitCalculados.toFixed(1) + " grados Fahrenheit");

    alert(segundoMensajeEntregado);
	
}
