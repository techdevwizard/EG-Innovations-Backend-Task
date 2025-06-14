const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const authenticateToken = require('../middleware/AuthMiddleware');


router.post('/login', authController.loginUser);
router.get('/profile', authenticateToken, authController.getProfile);

module.exports = router;

