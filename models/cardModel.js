import mongoose from "mongoose";

//#region CARD SCHEMA
const cardSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  color: { type: String },
  cost: { type: Number },
  rarity: { type: String },
  edition: { type: String },
  card_number: { type: Number },
  decks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deck" }],
});

const Card = mongoose.model("Card", cardSchema);
//#endregion

//#region EXPORTS
export { Card };
//#endregion
