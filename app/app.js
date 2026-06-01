const express = require('express');
const cors = require('cors');
const db = require('./config/db.config.js');
const router = require('./routers/router.js');

const app = express();

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

app.use(express.json());

db.sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err.message);
  });

// Rutas principales de la API
app.use('/api', router);

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de Productos Activa',
    version: '1.0.0',
    servidor: process.env.SERVER_NAME || 'google-cloud-api',
    hostname: require('os').hostname()
  });
});

// Manejo simple de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    mensaje: 'Ruta no encontrada'
  });
});

module.exports = app;