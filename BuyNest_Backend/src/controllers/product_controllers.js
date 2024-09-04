// controller.js
const db = require('../../db/db');
const query = require('../../db/query/query')
exports.getAllProducts = async (req, res) => {
  try {
    // const query = 'SELECT * FROM public.products ORDER BY product_id ASC';
    const productDetails = await db.query(query.allproducts);
    if (productDetails) {
      res.send({
        "productDetails": productDetails.rows
      });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
exports.addProducts = async (req, res) => {
  try {
    const { product_id, products_name, description, price, stock_quantity, category_id, image_url } = req.body
    const addedproducts = db.query(query.insertProduct, [product_id, products_name, description, price, stock_quantity, category_id, image_url])
    if (addedproducts) {
      res.send("product added")

    }

  } catch (error) {
    res.send(error)

  }
}
exports.editProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const { products_name, description, price, stock_quantity, category_id, image_url } = req.body
    const editedproduct = db.query(query.updateProduct, [products_name, description, price, stock_quantity, category_id, image_url, id])
    if (editedproduct) {
      res.send("product edited")

    }


  } catch (error) {
    res.send(error)
  }
}
exports.deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteproduct = db.query(query.deleteProduct, [id])
    if (deleteproduct) {
      res.send("item deleted")

    }
  } catch (error) {
    res.send(error)
  }

}
exports.topProducts = async (req, res) => {
  try {

    const result = await db.query(query.topProducts);

    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.status(404).json({ message: 'No products with low stock found' });
    }
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
