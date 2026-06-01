const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Ruta principal para verificar que funciona
app.get('/', (req, res) => {
    res.json({ mensaje: "¡Hola! Mi API está funcionando en Cloud Run" });
});

// Ruta dummy de productos
app.get('/api/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: "Laptop", precio: 800 },
        { id: 2, nombre: "Mouse", precio: 25 }
    ];
    res.json(productos);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});