const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const requireAuth = require("../middlewares/authMiddleware"); 


router.use(requireAuth);

router.get("/", postController.getPosts);

router.post("/", postController.postPost);

router.get("/edit/:id", postController.getEditPOst);

router.post("/edit/:id", postController.postEditPost);

router.get("/delete/:id", postController.deletePost);

module.exports = router;
