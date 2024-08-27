const express = require('express');
const router = express.Router();
const db = require('../../../db/db');
const bcrypt = require('bcrypt')
const  query = require('../../../db/query/query')
router.post('/login', async (req, res) => {
  try {
    const { email, plainPassword } = req.body;
    const userResult = await db.query(query.userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const storedHash = userResult.rows[0].password_hash;
    const isMatch = await bcrypt.compare(plainPassword, storedHash);

    if (isMatch) {
      res.status(200).json({ success: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ failure: error.message });
  }
});
module.exports = router;
