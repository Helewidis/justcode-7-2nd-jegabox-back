const express = require('express');
const mw = require('../middleware/middleware');
const { asyncWrap } = require('../utils/myutils');
const mypageController = require('../controllers/mypageController');

const router = express.Router();

<<<<<<< HEAD
router.get(
  '/bookinglist',
  asyncWrap(mw.authMiddleware),
  asyncWrap(mypageController.getBookList)
);
router.get(
  '/cancellist',
  asyncWrap(mw.authMiddleware),
  asyncWrap(mypageController.getCancelList)
);

router.get(
  '/header',
  asyncWrap(mw.authMiddleware),
  asyncWrap(mypageController.getHeaderInfo)
);

=======
router.get('/bookinglist', getBookRecord);
>>>>>>> 95e663e (conflict 해결을 위한 파일 정리)
module.exports = router;
