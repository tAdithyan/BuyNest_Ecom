const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'Ecomerce'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};