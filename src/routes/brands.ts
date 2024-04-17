import express from "express";
import brandController from "../controllers/brandControllers";

const router = express.Router();

router.get("/getAllBrands", brandController.getAllBrands);

export default router;
