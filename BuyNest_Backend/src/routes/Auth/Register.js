const express = require('express');
const router = express.Router();
const db = require('../../../db/db');
const bcrypt = require('bcrypt')
const query = require('../../../db/query/query')


router.post('/register', async (req, res) => {
  try {
    const { user_id, username, email, plainPassword } = req.body;

    if (!plainPassword) {
      return res.status(400).json({ error: "Password is required" });
    }
   const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(plainPassword, salt);
    const registerUserResult = await db.query(query.registerUserQuery, [user_id, username, email, password_hash]);

    res.status(201).json({
      success: 'Data posted successfully',
      data: registerUserResult.rows[0]
    });

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({
      failure: error.message
    });
  }
});
module.exports = router;
