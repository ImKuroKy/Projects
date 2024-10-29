import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { checkUser, getProfile, updateProfile } from "../models/profile.js";

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

export const editUserProfile = async (req, res) => {
  const userId = req.user.userId;
  const { name, email, phone, about } = req.body;
  let backgroundUrl, avatarUrl;

  try {
    const userExists = await checkUser(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const currentProfile = await getProfile(userId);

    if (req.files) {
      if (req.files.background) {
        backgroundUrl = req.files.background[0].path; // новый путь к файлу
      }

      if (req.files.avatar) {
        avatarUrl = req.files.avatar[0].path; // новый путь к файлу
      }
    }

    await updateProfile(
      name,
      email,
      phone,
      about,
      backgroundUrl,
      avatarUrl,
      userId
    );

    // Удаляем старые файлы только после успешного обновления
    if (req.files) {
      if (req.files.background && currentProfile.background_url) {
        // Используем только относительный путь из базы данных
        const oldBackgroundPath = currentProfile.background_url; // предполагается, что путь уже относительный
        await fs.unlink(oldBackgroundPath);
      }

      if (req.files.avatar && currentProfile.avatar_url) {
        const oldAvatarPath = currentProfile.avatar_url; // предполагается, что путь уже относительный
        await fs.unlink(oldAvatarPath);
      }
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (err) {
    console.error("Error updating user profile:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
