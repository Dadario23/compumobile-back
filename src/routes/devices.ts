import express from "express";
import deviceController from "../controllers/deviceControllers";

const router = express.Router();

router.post("/register", deviceController.registerDevice);

export default router;
