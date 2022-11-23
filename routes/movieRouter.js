const express = require('express');
const mw = require('../middleware/middleware');
const router = express.Router();
const controller = require('../controllers/movieController');
const { asyncWrap } = require('../utils/myutils');

router.get('/main', controller.getMainMovies);
router.get('/list', controller.getAllMovies);
router.get('/comingsoon', controller.getComingsoonMovies);
<<<<<<< HEAD
router.post('/', controller.searchTitle);
router.get('/', controller.searchText);
=======
router.get('/', asyncWrap(controller.getMovieByTitle));
>>>>>>> 9ea4666 (for Merge)

module.exports = router;
