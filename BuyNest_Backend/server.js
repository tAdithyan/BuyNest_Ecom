var express = require('express');
const db = require('./db/db');
const { getStudnet } = require('./db/query/query');
var app = express();
const port = '8000';
var bodyParser = require('body-parser')
var jsonencodedParser = bodyParser.json()
var urlencodedParse = bodyParser.urlencoded({ extends: false });
app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM public.users ORDER BY user_id ASC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.post('/register', jsonencodedParser, async (req, res) => {
  try {
    const user_id = "123278"
    const username = "adithyan123";
    const email = "adithyanttech1ewds4ds@gmail.com";
    const password_hash = "1234rty";


    if (!username || !email || !password_hash) {
      return res.status(400).json({ failure: 'Missing required fields' });
    }

    const checkUserQuery = 'SELECT * FROM public.users WHERE email = $1';
    const checkUserResult = await db.query(checkUserQuery, [email]);

    if (checkUserResult.rows.length > 0) {
      return res.status(409).json({ failure: 'User already exists' });
    }

    const registerUserQuery = `
      INSERT INTO public.users (user_id, username, email, password_hash, created_at, updated_at)
VALUES ($1, $2, $3, $4, NOW(), NOW())
RETURNING *;`

    const registerUserResult = await db.query(registerUserQuery, [user_id, username, email, password_hash]);

    res.status(201).json({
      success: 'Data posted successfully',
      data: registerUserResult.rows[0]
    });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({
      failure: error
    });
  }
});


app.post('/Login', async (req, res) => {
  try {
    const email = "adithyanttech1ewds4ds@gmail.com";
    const password_hash = "1234rtyds";

    if (!email || !password_hash) {
      return res.status(400).json({ failure: 'Missing required fields' });
    }
    const checkUserQuery = 'SELECT * FROM public.users WHERE email = $1 AND password_hash = $2';
    const checkUserResult = await db.query(checkUserQuery, [email, password_hash]);
    if (checkUserResult.rows.length === 0) {
      return res.status(401).json({ failure: 'Invalid email or password' });
    }


    const user = checkUserResult.rows[0];
    if (user) {
      res.status(200).json({ success: 'Login successful' });

    }

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ failure: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log('Conected .....');

})


