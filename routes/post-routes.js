const Router = require("express");
const router = new Router();
const controller = require("../controllers/post-controller");

router.post("/post", controller.CreatePost);
router.get("/post", controller.GetPostsByUser);
router.get("/posts", controller.GetAllPosts);

module.exports = router;