const db = require('../../db/db');
const query = require('../../db/query/query')

exports.allCategories = async (req, res) => {
  try {
    const result = await db.query(query.getallcategories);

    res.status(200).json({
      categories: result.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'An error occurred while fetching categories'
    });
  }
}
exports.addCategory =async (req, res) => {
  try {
    const { name, description } = req.body;

    const existingCategoryQuery = 'SELECT COUNT(*) FROM public.categories WHERE name = $1';
    const checkcategory = await db.query(existingCategoryQuery, [name]);
    if (checkcategory) {
      res.send("category already have")
    }
    else {
      const insertQuery = 'INSERT INTO public.categories(name, description) VALUES ($1, $2);';
      await db.query(insertQuery, [name, description]);

      res.status(201).send("Category added successfully");
    }
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).send("An error occurred while adding the category");
  }
}
exports.editCategory=async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }
    const query = `
      UPDATE public.categories
      SET name = COALESCE($1, name),
          description = COALESCE($2, description)
      WHERE name = $1 OR description = $2;
    `;
    const result = await db.query(query, [name, description]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
exports.deleteCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Category name is required' });
    }

    const query = 'DELETE FROM public.categories WHERE name = $1 RETURNING *;';
    const result = await db.query(query, [name]);

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}