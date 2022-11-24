const express = require('express');
const mw = require('../middleware/middleware');
const router = express.Router();
const controller = require('../controllers/movieController');

router.get('/main', controller.getMainMovies);
router.post('/list', controller.getAllMovies);
router.post('/comingsoon', controller.getComingsoonMovies);
router.post('/', controller.searchTitle);
router.get('/', controller.searchText);

module.exports = router;
