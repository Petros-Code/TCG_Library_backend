import mongoose from "mongoose";

// Vérifie si c'est ce que tu voulais ?

// "Champs : cards, totalMoneyValue, user"
const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
  commentaire: { type: String },
  totalMoneyValue: { type: mongoose.Schema.Types.Decimal128, default: 0 }, // Le Type: Decimal128 est pour les Float (ex: Decimal128 => 12.3232), il stock d'une façon similar à ObjectId
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
