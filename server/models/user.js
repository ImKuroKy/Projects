import pool from "../config/exports.js";

export const findUserByEmail = async (email) => {
  const userCheckQuery =
    'SELECT * FROM "warehouse-management"."user_account" WHERE email = $1';
  const userCheckResult = await pool.query(userCheckQuery, [email]);
  return userCheckResult.rows[0];
};

export const createUser = async (name, email, hashedPassword) => {
  const insertQuery = 'INSERT INTO "warehouse-management"."user_account" (name, email, password_hash) VALUES ($1, $2, $3) RETURNING user_id';
  const result = await pool.query(insertQuery, [name, email, hashedPassword]);
  return result.rows[0].user_id;
};

export const createUserData = async (userId, addressId) => {
  const insertQuery = 'INSERT INTO "warehouse-management"."user_data" (user_id) VALUES ($1)';
  await pool.query(insertQuery, [userId, addressId]);
};

export const createUserAddress = async (userId) => {
  const insertQuery = 'INSERT INTO "warehouse-management"."address" (user_id) VALUES ($1)';
  await pool.query(insertQuery, [userId]);
};
