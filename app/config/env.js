require('dotenv').config();

module.exports = {
  database: process.env.DB_NAME || 'tienda_db',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Antigua08*',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  ssl: process.env.DB_SSL === 'true'
};