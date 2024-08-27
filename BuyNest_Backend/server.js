var express = require('express');
const bcrypt = require('bcrypt')
const db = require('./db/db');
var app = express();
const port = '8000';
app.use(express.json())
app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM public.users ORDER BY user_id ASC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



const loginrouter = require('./src/routes/Auth/login')
const registerrouter = require('./src/routes/Auth/Register')
const productrouter = require('./src/routes/products/products')
app.use('/auth', loginrouter)
app.use('/auth', registerrouter)
app.use('/products', productrouter)










app.listen(port, () => {
  console.log('Conected .....');

})


