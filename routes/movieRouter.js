const express = require('express');
const mw = require('../middleware/middleware');
const router = express.Router();
const controller = require('../controllers/movieController');
const { asyncWrap } = require('../utils/myutils');

router.get('/main', controller.getMainMovies);
router.post('/list', controller.getAllMovies);
router.post('/comingsoon', controller.getComingsoonMovies);
router.post('/', controller.searchTitle);
router.get('/', controller.searchText);
router.get('/:id', asyncWrap(controller.getMovieByTitle));

module.exports = router;
