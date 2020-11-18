var express = require('express');
var router = express.Router();
var crtlmain = require('../controllers/main')
/* GET home page. */
router.get('/', crtlmain.index);

module.exports = router;
