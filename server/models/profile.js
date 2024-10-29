import pool from "../config/exports.js";

export const checkUser = async (userId) => {
  const userCheckId =
    'SELECT * FROM "warehouse-management"."user_account" WHERE user_id = $1';
  const result = await pool.query(userCheckId, [userId]);
  return result.rows.length > 0;
};

export const getProfile = async (userId) => {
  const getQueryProfile = `SELECT ua.name, ua.email, ud.phone, ud.background_url, ud.avatar_url, ud.about
      FROM "warehouse-management"."user_account" ua
      LEFT JOIN "warehouse-management"."user_data" ud ON ua.user_id = ud.user_id
      WHERE ua.user_id = $1`;
  const result = await pool.query(getQueryProfile, [userId]);
  return result.rows[0];
};
