const { Router } = require('express');
const { getPost } = require('../controllers/getPost');
const {getDetail} = require("../controllers/getDetail");
const { getCommentById } = require('../controllers/getCommentById');
const { getTags } = require('../controllers/getTags');
const {getUsers} = require("../controllers/getUsers")

const router = Router();

router.get('/post', getPost);
router.get('/detail/:id', getDetail);
router.get('/comment/:id', getCommentById);
router.get('/tags',getTags)
router.get('/users',getUsers)

module.exports = router;
