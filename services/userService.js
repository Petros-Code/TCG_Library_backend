import { User } from "../models/userModel.js";
import { Deck } from "../models/deckModel.js";
import { Card } from "../models/cardModel.js";
import { Library } from "../models/libraryModel.js";

//#region GET
const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.find(id);
};

const getUserWithDecksAndLibrary = (userId) => {
  return User.findById(userId).populate([
    {
      path: "decks",
      populate: { path: "cards" },
    },
    {
      path: "library",
      populate: { path: "cards" },
    },
  ]);
};
//#endregion

//#region  POST
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};
//#endregion

//#region PATCH
const updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};
//#endregion

//#region DELETE
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
//#endregion
export {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  getUserWithDecksAndLibrary,
};
