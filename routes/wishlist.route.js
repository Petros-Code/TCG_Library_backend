// #region IMPORTS -------------------------------
import express from "express";
import {
  getWishlist,
  postWishlist,
  patchWishlist,
} from "../controllers/createWishlist.controller.js";
// #endregion IMPORTS ----------------------------

const wishlistRoute = express.Router();

wishlistRoute.get("/", getWishlist);

wishlistRoute.post("/", postWishlist);
wishlistRoute.patch("/", patchWishlist);

export default wishlistRoute;
