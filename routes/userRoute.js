import express from "express";
import {
  getAllUsersController,
  createUserController,
  deleteUserController,
  updateUserController,
  getUserByIdController,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);

router.post("/", createUserController);

router.patch("/:id", updateUserController);

router.delete("/:id", deleteUserController);

export default router;
