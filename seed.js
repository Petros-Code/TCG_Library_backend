import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
dotenv.config();

import { User } from "./models/userModel.js";
import { Card } from "./models/cardModel.js";
import { Deck } from "./models/deckModel.js";
import { Library } from "./models/libraryModel.js";

const seed = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FirstDB");
    console.log("✅ Connecté à MongoDB");

    // VIDER LES ANCIENNES DONNÉES
    await Promise.all([
      User.deleteMany(),
      Card.deleteMany(),
      Deck.deleteMany(),
      Library.deleteMany(),
    ]);

    // Créer des utilisateurs
    const users = await User.insertMany([
      { name: "Charlie", age: 30, email: "charlie@hotmail.fr" },
      { name: "Pierre", age: 32, email: "pierre@gmail.com" },
      { name: "Jeremy", age: 33, email: "jerem@yahoo.fr" },
    ]);

    // Générer 50 cartes avec Faker
    const cardPool = [];
    for (let i = 0; i < 50; i++) {
      cardPool.push({
        name: faker.commerce.productName(),
        type: faker.helpers.arrayElement([
          "Creature",
          "Legendary Creature",
          "Artifact",
          "Sorcery",
          "Instant",
          "Land",
          "Enchantment",
        ]),
        color: faker.color.human(),
        cost: faker.number.int({ min: 0, max: 9 }),
        rarity: faker.helpers.arrayElement([
          "Common",
          "Uncommon",
          "Rare",
          "Mythic",
        ]),
        edition: faker.word.words({ count: { min: 1, max: 2 } }),
        card_number: i + 1,
      });
    }

    const cards = await Card.insertMany(cardPool); // ✅ insérer après avoir rempli le tableau

    // Créer les libraries
    const libraries = await Library.insertMany([
      {
        img: faker.image.urlPicsumPhotos(),
        totalCards: 25,
        moneyValue: 100 + Math.random() * 400,
        user: users[0]._id,
        cards: cards.slice(25).map((card) => card._id),
      },
      {
        img: faker.image.urlPicsumPhotos(),
        totalCards: 25,
        moneyValue: 150 + Math.random() * 350,
        user: users[1]._id,
        cards: cards.slice(15, 35).map((card) => card._id),
      },
      {
        img: faker.image.urlPicsumPhotos(),
        totalCards: 25,
        moneyValue: 75 + Math.random() * 200,
        user: users[2]._id,
        cards: cards.slice(0, 25).map((card) => card._id),
      },
    ]);

    // Choisir un nom de carte aléatoire comme commandant
    const randomCardName = () =>
      cards[Math.floor(Math.random() * cards.length)].name;

    // Créer les decks
    const decks = await Deck.insertMany([
      {
        name: "Eldrazi",
        type: "Commander",
        commander: randomCardName(),
        card_number: 15,
        user: users[0]._id,
        cards: cards.slice(0, 15).map((c) => c._id),
      },
      {
        name: "Markov",
        type: "Commander",
        commander: randomCardName(),
        card_number: 15,
        user: users[1]._id,
        cards: cards.slice(25, 40).map((c) => c._id),
      },
      {
        name: "Zombies",
        type: "Commander",
        commander: randomCardName(),
        card_number: 15,
        user: users[1]._id,
        cards: cards.slice(15, 30).map((c) => c._id),
      },
      {
        name: "Giga-Dino",
        type: "Commander",
        commander: randomCardName(),
        card_number: 15,
        user: users[2]._id,
        cards: cards.slice(35, 50).map((c) => c._id),
      },
    ]);

    // Associer les decks et libraries aux users
    users[0].decks = [decks[0]._id];
    users[0].library = libraries[0]._id;
    await users[0].save();

    users[1].decks = [decks[1]._id, decks[2]._id];
    users[1].library = libraries[1]._id;
    await users[1].save();

    users[2].decks = [decks[3]._id];
    users[2].library = libraries[2]._id;
    await users[2].save();

    const charlie = users[0];
    const wishlistCards = cards.slice(0, 5).map ((c) => c._id);
    charlie.wishlist = wishlistCards;
    await charlie.save();

    console.log("✅ Seed terminé avec succès !");
  } catch (err) {
    console.error("❌ Erreur lors du seed :", err);
  } finally {
    mongoose.connection.close();
    console.log("🔌 Connexion MongoDB fermée");
  }
};

seed();
