import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
import pool from "./exports.js";
import {
  userRegistrationValidation,
  userLoginValidation,
} from "./validators.js";

dotenv.config();

const app = express();
const port = 4040;
const secretKey = process.env.SECRET_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", userRegistrationValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;

    const userCheckQuery =
      'SELECT * FROM "warehouse-management"."user_account" WHERE email = $1';
    const userCheckResult = await pool.query(userCheckQuery, [email]);

    if (userCheckResult.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    pool.query(
      'INSERT INTO "warehouse-management"."user_account" (name, email, password_hash) VALUES ($1, $2, $3)',
      [name, email, hashedPassword]
    );
    res.status(201).json({
      succsess: true,
    });
  } catch (err) {
    console.error("Error inserting user: ", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.post("/login", userLoginValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const results = await pool.query(
      'SELECT * FROM "warehouse-management"."user_account" WHERE email = $1',
      [email]
    );

    if (results.rows.length === 0) {
      return res.status(401).send("Invalid email or password");
    }

    const user = results.rows[0];

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign({ userId: user.user_id }, secretKey, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (err) {
    console.error("Error fetching user: ", err);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server is running...");
  console.log(`Port --> ${port} \n`);
});
