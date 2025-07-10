// #region IMPORTS -------------------------------
import express from "express";
import {
  getWishlistByUserIdController,
  patchWishlistController,
} from "../controllers/wishlist.controller.js";
// #endregion IMPORTS ----------------------------

const wishlistRoute = express.Router();

wishlistRoute.get("/:id", getWishlistByUserIdController);

wishlistRoute.patch("/:id", patchWishlistController);

export default wishlistRoute;
