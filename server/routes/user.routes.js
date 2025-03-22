import express from 'express';
import { checkAuth, login, logout, register, updateProfile } from '../controller/user.controller.js';
import upload from '../middleware/upload.middleware.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.route("/signup").post(upload.single("image"), register)

router.route("/login").post(login)

router.route("/logout").post(logout)

router.route("/check-auth").get(authMiddleware, checkAuth)

router.route("/update-profile").put(authMiddleware, upload.single("image"), updateProfile)

export default router;