import { checkUser, getProfile } from "../models/profile.js";

export const getUserProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const userExists = await checkUser(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const userProfile = await getProfile(userId);

    res.status(200).json({
      data: userProfile,
    });
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
