const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user_controllers');


router.get('/userprofile/:id', controller.userProfile);
router.put('/updateprofile/:id', controller.updateProfile);
module.exports = router;
