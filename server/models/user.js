import pool from "../config/exports.js";

export const findUserByEmail = async (email) => {
  const userCheckQuery =
    'SELECT * FROM "warehouse-management"."user_account" WHERE email = $1';
  const userCheckResult = await pool.query(userCheckQuery, [email]);
  return userCheckResult.rows[0];
};

export const createUser = async (name, email, hashedPassword) => {
  const insertQuery = 'INSERT INTO "warehouse-management"."user_account" (name, email, password_hash) VALUES ($1, $2, $3)';
  await pool.query(insertQuery, [name, email, hashedPassword]);
};
