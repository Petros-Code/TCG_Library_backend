import express from "express";
import {
  getAllUsersController,
  createUserController,
  deleteUserController,
  updateUserController,
  getUserByIdController,
  getUserFull,
} from "../controllers/user.Controller.js";

const router = express.Router();

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.get("/:id/full", getUserFull);

router.post("/", createUserController);

router.patch("/:id", updateUserController);

router.delete("/:id", deleteUserController);

export default router;
