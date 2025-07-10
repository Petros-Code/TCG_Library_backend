import mongoose from "mongoose";

//#region DECK SCHEMA
const deckSchema = new mongoose.Schema({
  name: { type: String },
  format: { type: String },
  commander: { type: String },
  card_number: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
}, { timestamps: true });

const Deck = mongoose.model("Deck", deckSchema);
//#endregion

//#region EXPORTS
export { Deck };
//#endregion
