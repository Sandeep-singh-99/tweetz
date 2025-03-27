import express from 'express';
import upload from '../middleware/upload.middleware.js';
import { createPost, getAllPost } from '../controller/post.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

const uplodFields = upload.fields([
    { name: 'images', maxCount: 5 },
    { name: 'videos', maxCount: 2 },
])

router.route("/create-post").post(authMiddleware, uplodFields, createPost)

router.route("/get-all-post").get(getAllPost)

export default router;