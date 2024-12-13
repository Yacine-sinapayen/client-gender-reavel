import authRoutes from "./routes/auth.js";
import gameQuizItemsBabyRoutes from "./routes/gameQuizItemsBaby.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


// Allow us to use .env file
dotenv.config();
const app = express();
const MONGODB_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// Middleware for parsing request body
app.use(express.json());

// option 1 Allow all origins with default of cors(*)
app.use(cors({
  origin: 'http://localhost:5173' // Autoriser cette origine spécifique
}));

// Routes
app.use("/auth", authRoutes);
app.use("/game-quiz-items-baby", gameQuizItemsBabyRoutes);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening top port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });