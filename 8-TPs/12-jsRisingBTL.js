/*

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
 realizar una carga de datos validada e ingresada por ventanas emergentes solamente
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var numeroDeLegajo;
	var nacionalidadIngresada;

	edadIngresada=prompt("Ingrese su edad");
	edadIngresada=parseInt(edadIngresada);

	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada=prompt("Por favor reingrese su edad");
		edadIngresada=parseInt(edadIngresada);
	}
	document.getElementById("txtIdEdad").value = edadIngresada

	sexoIngresado=prompt("Ingrese su sexo\nM para masculino\nF para femenino");
	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado=prompt("Por favor reingrese su sexo\nM para masculino\nF para femenino");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado
	
	estadoCivilIngresado=prompt("Ingrese su estado civil\n1 Para soltero\n2 Para casado\n3 " +
	"Para divorciado/da\n4 Para viudo/da");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
	{
		estadoCivilIngresado=prompt("Por favor reingrese su estado civil\n1 Para soltero\n2 " +
		"Para casado\n3 Para divorciado/da\n4 Para viudo/da");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	switch (estadoCivilIngresado) {
		case 1:
			document.getElementById("txtIdEstadoCivil").value = ("Usted esta soltero");
			break;
		case 2:
			document.getElementById("txtIdEstadoCivil").value = ("Usted esta casado");
			break;
		case 3:
			document.getElementById("txtIdEstadoCivil").value = ("Usted esta divorciado/da");
			break;
		case 4:
			document.getElementById("txtIdEstadoCivil").value = ("Usted esta viudo/da");
			break;
	}

	sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto");
	sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	while(isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado < 8000)
	{
		sueldoBrutoIngresado=prompt("Por favor reingrese su sueldo bruto");
		sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	}
	document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;

	numeroDeLegajo=prompt("Ingrese su numero de legajo");
	numeroDeLegajo=parseInt(numeroDeLegajo);
	while(isNaN(numeroDeLegajo) || numeroDeLegajo <1000 || numeroDeLegajo > 9999)
	{
		numeroDeLegajo=prompt("Por favor reingrese su numero de legajo");
		numeroDeLegajo=parseInt(numeroDeLegajo);
	}
	document.getElementById("txtIdLegajo").value = numeroDeLegajo
	
	nacionalidadIngresada=prompt("Ingrese su nacionalidad\n'A' si es argentino\n'E' si " +
	"es extranjero\n'N' si es nacionalizado");
	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada 
	!= "N")
	{
		nacionalidadIngresada=prompt("Por favor reingrese su nacionalidad\n'A' si es argentino\n'E' " +
		"si es extranjero\n'n' si es nacionalizado");
	}
	switch (nacionalidadIngresada) {
		case "A":
			document.getElementById("txtIdNacionalidad").value = ("Usted es argentino");
			break;
		case "E":
			document.getElementById("txtIdNacionalidad").value = ("Usted es extranjero/ra");
			break;
		case "N":
			document.getElementById("txtIdNacionalidad").value = ("Usted es nacionalizado/da");
			break;
	}
}