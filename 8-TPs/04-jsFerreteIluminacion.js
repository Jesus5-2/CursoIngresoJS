/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un
descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3 a lmparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos
brutos e informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
*/

function CalcularPrecio ()
{
    var lamparasCompradas;
    var precioDeCadaLampara;
    var precioFinalSinDescuento;
    var precioFinal;
    var marcaDeLampara;
    var impuestoIngresosBrutos;

    lamparasCompradas = document.getElementById("txtIdCantidad").value;
    marcaDeLampara = document.getElementById("Marca").value;
    precioDeCadaLampara = 35;
    
    lamparasCompradas = parseFloat(lamparasCompradas);

    precioFinalSinDescuento = precioDeCadaLampara * lamparasCompradas;
    precioFinal = precioFinalSinDescuento;

    switch (lamparasCompradas)
    {
        case 5:
            if(marcaDeLampara == "ArgentinaLuz")
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 40 / 100);
            }
            else
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 30 / 100);
            }
            break;
        case 4:
            if(marcaDeLampara=="ArgentinaLuz" || marcaDeLampara=="FelipeLamparas")
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 25 / 100);
            }
            else
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 20 / 100);
            }
            break;
        case 3:
            if(marcaDeLampara=="ArgentinaLuz")
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 15 / 100);
            }
            else
            {
                if(marcaDeLampara=="FelipeLamparas")
                {
                    precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 10 / 100);
                }
                else
                {
                    precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 5 / 100);
                }
            }
            break;
        case 2:
        case 1:
            precioFinal = precioFinalSinDescuento
            break;
        default: precioFinal = precioFinalSinDescuento / 2;
    }
    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinalSinDescuento * 10 / 100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
        alert("Usted pagó: " + impuestoIngresosBrutos + " de IIBB.")
    }

    document.getElementById("txtIdprecioDescuento").value = (precioFinal);
}











/*Intento 2
function CalcularPrecio () 
{
 	var lamparasCompradas;
    var precioDeCadaLampara;
    var precioFinalSinDescuento;
    var precioFinal;
    var marcaDeLampara;
    var impuestoIngresosBrutos;

    lamparasCompradas = document.getElementById("txtIdCantidad").value;
    marcaDeLampara = document.getElementById("Marca").value;
    precioDeCadaLampara = 35;
    
    lamparasCompradas = parseFloat(lamparasCompradas);


    precioFinalSinDescuento = precioDeCadaLampara * lamparasCompradas;
    precioFinal = precioFinalSinDescuento;


    if(lamparasCompradas > 5)
    {
        precioFinal = precioFinalSinDescuento / 2;
    }
    else
    {
        if(lamparasCompradas == 5)
        {
            if(marcaDeLampara == "ArgentinaLuz" )
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 40 / 100);
            }
            else
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 30 / 100);
            }
        }
        if(lamparasCompradas == 4)
        {
            if(marcaDeLampara == "ArgentinaLuz" || marcaDeLampara == "FelipeLamparas")
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 25 / 100);
            }
            else
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 20 / 100);
            }
        }
        if(lamparasCompradas == 3)
        {
            if(marcaDeLampara == "ArgentinaLuz")
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 15 / 100);
            }
            else
            {
                if(marcaDeLampara == "FelipeLamparas")
                {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 10 / 100);
                }
                else
                {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 5 / 100);
                }
            }
        }
    }

    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinalSinDescuento * 10 / 100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
        alert("Usted pagó: " + impuestoIngresosBrutos + " de IIBB.")
    }

document.getElementById("txtIdprecioDescuento").value = (precioFinal);
}
*/













/*Intento 1
function CalcularPrecio () 
{
 	var lamparasCompradas;
    var precioDeCadaLampara;
    var precioFinalSinDescuento;
    var precioFinal;
    var marcaDeLampara;
    var impuestoIngresosBrutos;

    lamparasCompradas = document.getElementById("txtIdCantidad").value;
    marcaDeLampara = document.getElementById("Marca").value;
    precioDeCadaLampara = 35;
    
    lamparasCompradas = parseFloat(lamparasCompradas);


    precioFinalSinDescuento = precioDeCadaLampara * lamparasCompradas;
    precioFinal = precioFinalSinDescuento


    /*if(lamparasCompradas > 5)
    {
        precioFinal = precioFinalSinDescuento / 2;
    }
    else
    {
        if(lamparasCompradas == 5 && marcaDeLampara == "ArgentinaLuz" )
        {
           precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 40 / 100);
        }
        else
        {
            if(lamparasCompradas == 5)
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 30 / 100);
            }
        }
        if(lamparasCompradas == 4 && (marcaDeLampara == "ArgentinaLuz" || marcaDeLampara == 
        "FelipeLamparas"))
        {
            precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 25 / 100);
        }
        else
        {
            if(lamparasCompradas == 4)
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 20 / 100);
            }
        }
        if(lamparasCompradas == 3 && marcaDeLampara == "ArgentinaLuz")
        {
            precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 15 / 100);
        }
        else
        {
            if(lamparasCompradas == 3 && marcaDeLampara == "FelipeLamparas")
            {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 10 / 100);
            }
            else
            {

                if(lamparasCompradas == 3)
                {
                precioFinal = precioFinalSinDescuento - (precioFinalSinDescuento * 5 / 100);
                }
            }
        }
    }

    if (precioFinal > 120)
    {
        impuestoIngresosBrutos = precioFinal * 10 / 100;
        precioFinal = precioFinal + impuestoIngresosBrutos;
    }

document.getElementById("txtIdprecioDescuento").value = ("El precio es de: $" + precioFinal);
}
*/
