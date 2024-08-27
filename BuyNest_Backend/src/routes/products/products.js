const express = require('express');
const router = express.Router();
const db = require('../../../db/db');
const controller = require('../../controllers/product_controllers');


router.get('/allproducts', controller.getAllProducts);
router.post('/addproduct', controller.addProducts)
router.patch('/editproduct/:id', controller.editProducts)
router.delete('/deleteproduct/:id', controller.deleteProducts)

module.exports = router;

