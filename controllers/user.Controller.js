import mongoose from "mongoose";
import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  getUserWithDecksAndLibrary,
} from "../services/user.Service.js";

//#region  GET
const getAllUsersController = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

const getUserByIdController = async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "ID utilisateur invalide" });
  }
  try {
    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Erreur dans getUserByIdController :", error);
    res.status(500).json({ error: "Erreur Serveur" });
  }
};

const getUserFull = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await getUserWithDecksAndLibrary(userId);
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    res.json(user);
  } catch (error) {
    console.error("🔥 Erreur getUserFull:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

//#endregion

//#region POST
const createUserController = async (req, res) => { 
  const { name, age, email } = req.body;
if (!name || !age || !email) {
  return res.status(400).json({ error: "Champs requis : name, age, email" });
}

  try {
    const newUser = await createUser({ name, age, email });
    res.status(201).json(newUser);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "Email déjà utilisé" });
    }

    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ error: err.message });
    }

    console.error("Erreur lors de la création de l'utilisateur :", err);
    res.status(500).json({ error: "Erreur serveur lors de la création" });
  }
};
//#endregion

//#region PATCH
const updateUserController = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid user ID." });
    }

    const user = await updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: "User not found." });

    res.json({ message: "User updated with success.", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//#endregion

//#region  DELETE
const deleteUserController = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    if (!user)
      return res.status(404).json({ error: "User not found " });
    res.json({ message: "User deleted with success", user });
  } catch (err) {
    if (err.name == "CastError" && err.kind == "ObjectId") {
      res.status(400).json({ error: "User ID must contain 24 characters" });
    } else {
      res.status(500).json({ error: "Error encountered !" });
    }
  }
};
//#endregion
export {
  getAllUsersController,
  createUserController,
  deleteUserController,
  updateUserController,
  getUserByIdController,
  getUserFull,
};
