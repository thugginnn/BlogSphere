const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', getPosts);
router.post('/', authMiddleware, createPost);

module.exports = router;
