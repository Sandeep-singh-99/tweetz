import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { createComment, getComments } from '../controller/comment.controller.js';

const router = express.Router();

router.route('/create-comment/:postId').post(authMiddleware, createComment)

router.route('/get-comments/:postId').get(getComments)

export default router;