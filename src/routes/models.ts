import express from "express";

import { getModelsByBrand } from "../controllers/modelControllers";

const router = express.Router();

router.get("/getModelsByBrand", getModelsByBrand);

export default router;
