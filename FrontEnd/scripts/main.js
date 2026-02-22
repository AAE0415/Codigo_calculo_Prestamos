const form = document.getElementById('formPrestamo');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById('nombre').value,
        prestamo: parseFloat(document.getElementById('prestamo').value),
        meses: parseInt(document.getElementById('meses').value),
        interes: parseFloat(document.getElementById('interes').value)
    };

    const response = await fetch('http://localhost:3000/prestamo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    respuesta.value = `${result.nombre} – $${result.cuota} – $${result.prestamo} – ${result.meses} meses – interés ${result.interes}%`;
});