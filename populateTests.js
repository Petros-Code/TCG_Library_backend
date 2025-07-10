//#region Le TOUT Fonctionnel via la route GET /users/:id/full
import { User } from "./models/userModel.js";
// import { Deck } from "./models/deckModel.js";

// const deckId = "686e380127c9664bede8c52d";
// const decksWithCards = await Deck.findById(deckId).populate("cards");
// console.log(decksWithCards);

const userId = "686e380127c9664bede8c4f2";
// const userWithLibrary = await User.findById(userId).populate("library");
// console.log(userWithLibrary);

const userWithDecksWithCards = await User.findById(userId).populate({
  path: "decks", // 1er niveau : les decks de l'utilisateur
  populate: {
    path: "cards", // 2e niveau : les cartes dans les decks
  },
});
console.log(userWithDecksWithCards);

const user = await User.findById(userId)
  .populate({
    path: "decks",
    populate: {
      path: "cards",
    },
  })
  .populate({
    path: "library",
    populate: {
      path: "cards",
    },
  });

console.log(user);
//#endregion
