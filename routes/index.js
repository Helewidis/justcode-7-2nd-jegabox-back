const express = require('express');

const bookingRouter = require('./bookingRouter');
const mypageRouter = require('./mypageRouter');
const userRouter = require('./userRouter');
const movieRouter = require('./movieRouter');
const likesRouter = require('./likesRouter');

const router = express.Router();

router.use('/booking', bookingRouter);
router.use('/mypage', mypageRouter);
router.use('/users', userRouter);
router.use('/movie', movieRouter);
router.use('/likes', likesRouter);

module.exports = router;
