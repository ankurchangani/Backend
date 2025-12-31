const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.showAddForm);

router.get("/users", userController.showUserTable);

router.post("/add", userController.addUser);

router.get("/edit/:id", userController.getEditUser);

router.post("/edit/:id", userController.updateUser);

router.get("/delete/:id", userController.deleteUser);

module.exports = router;
