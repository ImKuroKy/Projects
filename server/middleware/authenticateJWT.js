import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        console.error("JWT verification error:", err);
        return res.sendStatus(403).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "Authorization header not found" });
  }
};

export default authenticateJWT;
