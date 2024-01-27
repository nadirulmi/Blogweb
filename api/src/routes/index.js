const { Router } = require('express');
const { getPost } = require('../controllers/getPost');
const {getDetail} = require("../controllers/getDetail");
const { getCommentById } = require('../controllers/getCommentById');

const router = Router();

router.get('/post', getPost);
router.get('/detail/:id', getDetail);
router.get('/comment/:id', getCommentById);


module.exports = router;
