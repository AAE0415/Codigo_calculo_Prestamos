/*
* Archivo utils.js
* Cálculo de cuota de préstamo
*/

function CalcularcostoPeso(peso) {
    return peso * 2.0;
}

function CalcularcostoDistancia(distancia) {
    return distancia * 0.05;
}

function CalcularSubtotal(costoPeso, costoDistancia) {
    return costoPeso + costoDistancia;
}

function CalcularDescuento(descuento, subtotal) {
    if (descuento === 'WEB10') {
        return subtotal * 0.9;
    } else if (descuento === 'WEB20') {
        return subtotal * 0.8;
    }
    return subtotal;
}

function CalcularImpuesto(subtotalDescuento) {
    return subtotalDescuento * 0.08;
}

function CalcularTotal(subtotalDescuento, impuesto) {
    return subtotalDescuento + impuesto; 
}


module.exports = { CalcularcostoPeso, CalcularcostoDistancia, CalcularSubtotal, CalcularDescuento, CalcularImpuesto, CalcularTotal };