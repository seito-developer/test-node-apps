const express = require('express');
const router = express.Router();

const sayHai = require('../controllers/user');

router.get('/', sayHai);

module.exports = router;