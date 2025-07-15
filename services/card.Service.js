import { Card } from "../models/cardModel.js";

//#region POST
const createCard = async (cardData) => {
  const newCard = new Card(cardData);
  return await newCard.save();
};
//#endregion

export { createCard };
