const express = require('express');
const router = express.Router();
const controller = require('../../controllers/cart_controllers');
const db = require('../../../db/db')

router.post('/addtocart',controller.addtocart )
router.get('/:id', controller.cart);

router.post('/updateCart/:id',controller.updatecart)
router.delete('/deletecartitem/:id', controller.removeitem);


module.exports = router;
