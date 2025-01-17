const { Router } = require("express");
const userRouter = Router();
const { getUserById, getMartItems } = require("../controllers/userController");

userRouter.get("/", getUserById);
userRouter.get("/mart", getMartItems);

module.exports = userRouter;