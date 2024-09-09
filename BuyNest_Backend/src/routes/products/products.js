const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../../../db/db');
const controller = require('../../controllers/product_controllers');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
router.get('/allproducts', controller.getAllProducts);
router.get('/topproducts', controller.topProducts);

router.post('/addproduct', upload.single('image'), controller.addProducts);
router.patch('/editproduct/:id', upload.single('image'), controller.editProducts);
router.delete('/deleteproduct/:id', controller.deleteProducts);

module.exports = router;
