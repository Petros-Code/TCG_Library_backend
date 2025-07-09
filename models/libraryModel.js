import mongoose from "mongoose";

//#region user LIBRARY
const librarySchema = new mongoose.Schema(
  {
    img: { type: String },
    totalCards: { type: Number },
    moneyValue: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
  },
  { timestamps: true }
);
const Library = mongoose.model("Library", librarySchema);
//#endregion

//#region EXPORTS
export { Library };
//#endregion
