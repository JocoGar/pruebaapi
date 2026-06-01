const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para entender JSON en las peticiones
app.use(express.json());

// --- ENDPOINTS ---

// 1. Salud de la API
app.get('/', (req, res) => {
    res.json({ mensaje: "API de Productos Activa", version: "1.0.1" });
});

// 2. Obtener lista completa (GET)
app.get('/api/productos', (req, res) => {
    const productos = [
        { id: 1, nombre: "Laptop", precio: 800 },
        { id: 2, nombre: "Mouse", precio: 25 },
        { id: 3, nombre: "Teclado", precio: 45 }
    ];
    res.json(productos);
});

// 3. Obtener uno solo por ID (GET con parámetro)
app.get('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Simulación de búsqueda
    res.json({ id: id, nombre: "Producto encontrado", precio: 100 });
});

// 4. Crear un producto nuevo (POST)
app.post('/api/productos', (req, res) => {
    const nuevoProducto = req.body;
    // Aquí normalmente guardarías en base de datos
    res.status(201).json({
        mensaje: "Producto creado con éxito",
        productoRecibido: nuevoProducto
    });
});

// --- INICIO ---
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});