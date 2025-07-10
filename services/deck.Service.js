import { Deck } from "../models/deckModel";

//#region GET
//➤ /decks/:id Récupérer un deck par son ID
//➤ /users/:id/decks Obtenir tous les decks d’un utilisateur donné
//➤ /decks/:id/full Récupérer un deck avec ses cartes et l’utilisateur propriétaire (via populate imbriqué)
//➤ /decks/search?name=...&type=... Rechercher un deck par nom, type, commandant...
//➤ /decks/:id/statistics Obtenir des infos : nombre de cartes, mana curve, raretés, etc.
//#endregion

//#region POST
//➤ /decks: Créer un nouveau deck
//#endregion

//#region PATCH
//➤ /decks/:id Mettre à jour un deck existant
//➤ /decks/:deckId/add-card/:cardId Ajouter une carte à un deck
//➤ /decks/:deckId/remove-card/:cardId Retirer une carte d’un deck
//#endregion

//#region DELETE
//➤ /decks/:id Supprimer un deck
//#endregion

export {

};
