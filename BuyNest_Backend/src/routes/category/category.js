const express = require('express');
const router = express.Router();
const controller = require('../../controllers/categories_controler');

router.get('/',controller.allCategories );
router.post('/add', controller.addCategory);
router.put('/edit', controller.editCategory );
router.delete('/delete', controller.deleteCategory);





module.exports = router