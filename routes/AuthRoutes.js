const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const authenticateToken = require('../middleware/AuthMiddleware');

// Public
router.post('/login', authController.loginUser);

// Secured
router.get('/profile', authenticateToken, authController.getProfile);

module.exports = router;

// S- single responsibilty principle (SIP)
// o-open closed principle(OCP)
// l-liskov substitution principle(LSP)
// i-interface segregation principle(ISP)
// d-dependency inversion principle(DIP)
