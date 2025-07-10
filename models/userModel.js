import mongoose from "mongoose";

//#region user SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: { type: String, requiered: true },
    age: { type: Number, min: 12 },
    email: { type: String, unique: true },
    decks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deck" }],
    library: { type: mongoose.Schema.Types.ObjectId, ref: "Library" },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
//#endregion

//#region EXPORTS
export { User };
//#endregion
