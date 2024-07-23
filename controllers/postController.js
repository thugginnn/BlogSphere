const Post = require('../models/post');

exports.getPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, userId: req.userId });
  res.status(201).json(post);
};
