import mongoose from "mongoose";

//#region DECKTAGS SCHEMA
const deckTagsSchema = new mongoose.Schema({
  deck: { type: mongoose.Schema.Types.ObjectId, ref: "Deck", required: true },
  card: { type: mongoose.Schema.Types.ObjectId, ref: "Card", required: true },
  tags: [{ type: String }],
}, { timestamps: true });

const DeckTag = mongoose.model("DeckTag", deckTagsSchema);
//#endregion

//#region EXPORTS
export { DeckTag };
//#endregion
