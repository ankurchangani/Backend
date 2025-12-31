const jwt = require("jsonwebtoken");
const Post = require("../models/Post");



exports.getPosts = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const posts = await Post.find({ createdBy: decoded.id }).populate("createdBy");

    const user = {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
    };

    res.render("posts", {
      posts,
      userId: decoded.id,
      user,
    });

  } catch (err) {
    console.log(err);
    res.send("Error loading posts");
  }
};


exports.postPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const post = new Post({
      title,
      content,
      createdBy: decoded.id,
    });

    await post.save();
    res.redirect("/posts");
  } catch (err) {
    console.log(err);
    res.send("Error creating post");
  }
};


exports.getEditPOst = async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('editPost', { post })
};

exports.postEditPost = async (req, res) => {
  const { title, content } = req.body;
  await Post.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect("/posts");
};


exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/posts");
};
