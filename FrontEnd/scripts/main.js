const form = document.getElementById('formPrestamo');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById('nombre').value,
        peso: parseFloat(document.getElementById('peso').value),
        distancia: parseFloat(document.getElementById('distancia').value),
        descuento: document.getElementById('descuento').value
    };

    

    const response = await fetch('http://localhost:3000/prestamo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    respuesta.value = `Nombre: ${result.nombre}
Peso: ${result.peso} Kg
Distancia: ${result.distancia} Km
Descuento: ${result.descuento || 'Ninguno'}
Costo por Peso: $${result.costoPeso}
Costo por Distancia: $${result.costoDistancia}
Subtotal: $${result.subtotal}
Subtotal con Descuento: $${result.subtotalDescuento}
Impuesto: $${result.impuesto}
Total a Pagar: $${result.total}`;
});


