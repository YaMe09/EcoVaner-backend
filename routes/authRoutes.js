const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.put('/treeHeight', authController.verifyToken, authController.updateUserTreeHeight);

module.exports = router;