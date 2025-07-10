import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import cardRoute from "./routes/cardRoute.js";
import { connectDB } from "./config/config.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use("/users", userRoute);
app.use("/cards", cardRoute);


app.listen(port, () => {
  console.log(`Le Serveur tourne sur http://localhost:${port}`);
});
