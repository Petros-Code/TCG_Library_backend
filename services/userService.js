import { User } from "../models/userModel.js";
//#region GET
const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
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
  const user = new User(userData);
  const savedUser = await user.save();
  return savedUser;
};
//#endregion

//#region PATCH
const updateUser = async (id, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });

    return updatedUser;
  } catch (error) {
    throw new Error(`Update failed: ${error.message}`);
  }
};

//#endregion

//#region DELETE
const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return deletedUser;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
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
