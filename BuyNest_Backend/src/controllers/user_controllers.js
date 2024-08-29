const db = require('../../db/db');
const query = require('../../db/query/query')
exports.userProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(query.selectuserbyid, [id]);
    if (result.rows.length > 0) {
      res.json({ Result: result.rows[0] });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
}
exports.updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email, password_hash, role } = req.body;

    let hashedPassword = null;
    if (password_hash) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password_hash, saltRounds);
    }


    const result = await db.query(query.updateprofile, [username, email, hashedPassword, role, id]);

    if (result.rowCount > 0) {
      res.json({ message: "User updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while updating the user"
    });
  }
}