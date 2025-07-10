// #region IMPORTS -------------------------------
import express from "express";
import {
  getWishlistByUserIdController,
  patchWishlistController,
} from "../controllers/wishlist.controller.js";
// #endregion IMPORTS ----------------------------

const wishlistRoute = express.Router();

wishlistRoute.get("/", getWishlistByUserIdController);

wishlistRoute.patch("/", patchWishlistController);

export default wishlistRoute;
