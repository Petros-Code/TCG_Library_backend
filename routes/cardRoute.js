import express from "express";
import { createCardController } from "../controllers/cardController.js";

const router = express();

router.post("/", createCardController);

export default router;
