import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 4040;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.listen(port, (err) => {
  if (err) {
    return console.log("Something went wrong: ", err);
  }
  console.log("Server is running...");
  console.log(`Port --> ${port} \n`);
});
