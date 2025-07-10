import { User } from "../models/userModel.js";
import { Card } from "../models/cardModel.js";
import Wishlist from "../models/wishlistModel.js";

const getWishlistByUserIdController = async (req, res) => {
  try {
    const params = req.params.id;
    const paramsSize = params.split("").length;
    if (paramsSize < 24 || paramsSize > 24) {
      res.status(400).send(`The User ID given should be only 24 characters`);
    } else {
      const getUser = await User.findById(params);
      if (getUser) {
        const cardRefs = getUser.wishlist;
        const getCards = await Promise.all(
          cardRefs.map(async (cardID) => {
            return await Card.findById(cardID);
          })
        );
        res.status(200).send(getCards);
      } else {
        res.status(404).send(`Couldn't find the User ${params}`);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const patchWishlistController = async (req, res) => {};

export { getWishlistByUserIdController, patchWishlistController };
