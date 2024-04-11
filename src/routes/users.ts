import express from "express";
import userController from "../controllers/userControllers";
import auth from "../middlewares/auth";

const router = express.Router();

router.get("/", userController.getAllUsers);

router.post("/register", userController.register);

router.post("/login", userController.login);

router.post("/logout", /* auth, */ userController.logout);

router.get("/me", auth, userController.me); //OK

export default router;
