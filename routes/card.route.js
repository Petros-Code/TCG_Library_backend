import express from "express";
import { createCardController } from "../controllers/card.controller.js";

const router = express();

router.post("/", createCardController);

export default router;
