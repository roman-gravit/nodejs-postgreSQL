const Router = require("express");
const router = new Router();
const controller = require("../controllers/user-controller");

router.post("/user", controller.CreateUser);
router.get("/users", controller.GetUsers);
router.get("/user/:id", controller.GetUserById);
router.put("/user", controller.UpdateUser);
router.delete("/user/:id", controller.DeleteUser);

module.exports = router;