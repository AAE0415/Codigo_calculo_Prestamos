const express = require('express');
const cors = require('cors');
const { calcularCuota } = require('./scripts/utils');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/prestamo', (req, res) => {
    const { nombre, prestamo, meses, interes } = req.body;

    const cuota = calcularCuota(prestamo, meses, interes);

    res.json({
        nombre,
        prestamo,
        meses,
        interes: interes * 100,
        cuota: cuota.toFixed(2)
    });
});

app.listen(port, () => {
    console.log(`Backend ejecutándose en http://localhost:${port}`);
});