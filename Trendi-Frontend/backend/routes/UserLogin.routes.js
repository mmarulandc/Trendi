const express = require("express");
const auth = require('../controllers/auth.controller');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();

router.post('/login',auth.login);
router.post('/signup',auth.signup);




module.exports = router;