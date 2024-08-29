const db = require('../../db/db');
const query = require('../../db/query/query')
exports.addtocart =async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body
    const addtocart = await db.query(query.insertProduct_to_Cart, [userId, productId, quantity])
    if (addtocart) {
      res.json("added to cart")
    }
  } catch (error) {
    res.json({
      "error": error
    })
  }
}
exports.cart = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(query.allcartitems, [id]);
    if (result.rows.length > 0) {
      res.status(200).json({
        cart: result.rows
      });
    } else {
      res.status(404).json({ message: 'No cart items found for this user.' });
    }
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
exports.updatecart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const id = req.params.id
    const updatecart = db.query(query.updatecart, [id, productId, quantity])
    if (updatecart) {
      res.send("cart updated")
    }
    else {
      res.status(404).json({ message: 'No cart items found for this user.' });
    }
  } catch (error) {
    res.send(error)
  }
}

exports.removeitem =async (req, res) => {
  try {
    const userId = req.params.id;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    const result = await db.query(query.deleteproductfromcart, [productId, userId]);

    if (result.rowCount > 0) {
      res.status(200).send('Item removed successfully');
    } else {
      res.status(404).json({ message: 'Item not found or already removed' });
    }
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}