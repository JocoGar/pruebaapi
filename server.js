const app = require('./app/app.js');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en ${HOST}:${PORT}`);
});