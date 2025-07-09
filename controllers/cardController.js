import { createCard } from "../services/cardService.js";

//#region POST
const createCardController = async (req, res) => {
  try {
    const card = await createCard(req.body);
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//#endregion

export { createCardController };
