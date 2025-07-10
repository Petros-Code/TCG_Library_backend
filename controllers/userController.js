import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  getUserWithDecksAndLibrary,
} from "../services/userService.js";

//#region  GET
const getAllUsersController = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

const getUserByIdController = async (req, res) => {
  const user = await getUserById();
  res.json(user);
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
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//#endregion

//#region PATCH
const updateUserController = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: "User not found." });
    res.json({ message: "User updated with success." });
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
      return res.status(404).json({ error: "Utilisateur non trouvé " });
    res.json({ message: "Utilisateur supprimé" });
  } catch (err) {
    if (err.name == "CastError" && err.kind == "ObjectId") {
      res.status(400).json({ error: "Le UserId doit comporter 24 caractères" });
    } else {
      res.status(500).json({ error: "Une erreur est survenue !" });
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
