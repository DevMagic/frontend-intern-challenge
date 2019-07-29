const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')
/**
 * @api {get} / Index
 * @apiGroup Pagina
 * 
 */
router.get('/', controller.get);
module.exports = router;