const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

// HEALTH CHECK
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    mensaje: 'API funcionando correctamente',
    hostname: require('os').hostname(),
    uptime: process.uptime()
  });
});

// PRODUCTOS
router.get('/productos', productoController.obtenerProductos);
router.get('/productos/:id', productoController.obtenerProductoPorId);
router.post('/productos', productoController.crearProducto);
router.put('/productos/:id', productoController.actualizarProducto);
router.delete('/productos/:id', productoController.eliminarProducto);

// TEST
router.get('/test', (req, res) => {
  res.json({
    mensaje: 'Router funcionando correctamente'
  });
});

module.exports = router;