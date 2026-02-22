# Codigo_calculo_Prestamos

Este proyecto implementa un sistema de **cálculo de préstamos** usando arquitectura **Frontend + Backend separados**, comunicándose exclusivamente mediante **JSON**.

---

## Descripción General

El sistema permite:

- Recibir datos de un préstamo (nombre, monto, meses, interés)
- Procesar la información en el backend
- Calcular la cuota mensual
- Retornar los resultados en formato **JSON**
- Mostrar los resultados directamente en el frontend sin recargar la página

La comunicación se realiza mediante **HTTP + JSON**, cumpliendo el principio de separación de responsabilidades.

## Arquitectura del Proyecto

```text
EjemploConJSON/
│
├── BackEnd/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── scripts/
│       └── utils.js
│
├── FrontEnd/
│   ├── index.html
│   └── scripts/
│       └── main.js
│
└── README.md


Pasos para correr el backend en el puerto 3000

    - Instalador de dependencias Backend: cd BackEnd
                                          npm install
    
    - Ejecutar el backend: npm start

    - Servidor backend en: http://localhost:3000

    - Abrir frotend liveServer: http://localhost:5500


