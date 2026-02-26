const express = require('express');
const cors = require('cors');
const { CalcularcostoPeso, CalcularcostoDistancia, CalcularSubtotal, CalcularDescuento, CalcularImpuesto, CalcularTotal  } = require('./scripts/utils');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/prestamo', (req, res) => {
    const { nombre, peso, distancia, descuento } = req.body;

    const costoPeso = CalcularcostoPeso(peso);
    const costoDistancia = CalcularcostoDistancia(distancia);
    const subtotal = CalcularSubtotal(costoPeso, costoDistancia);
    const subtotalDescuento = CalcularDescuento(descuento ,subtotal);
    const impuesto = CalcularImpuesto(subtotalDescuento);
    const total = CalcularTotal(subtotalDescuento, impuesto);

    res.json({
        nombre,
        peso,
        distancia,
        descuento,
        costoPeso: costoPeso.toFixed(6),
        costoDistancia: costoDistancia.toFixed(6),
        subtotal: subtotal.toFixed(6),
        subtotalDescuento: subtotalDescuento.toFixed(6),
        impuesto: impuesto.toFixed(6),
        total: total.toFixed(6)
    });
});

app.listen(port, () => {
    console.log(`Backend ejecutándose en http://localhost:${port}`);
});