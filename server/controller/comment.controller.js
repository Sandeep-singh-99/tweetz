import Comment from "../model/comment.model.js";

export const createComment = async (req, res) => {
    try {
        const { commentText } = req.body;
        const { postId } = req.params;
        const userId  = req.user._id;

        if (!commentText) {
            return res.status(400).json({ error: "Comment content is required" });
        }

        if (!postId) {
            return res.status(400).json({ error: "Post ID is required" });
        }

        if (!userId) {
            return res.status(401).json({ error: "Please login to create a comment" });
        }

        const newComment = await Comment.create({ 
            commentText,
            postId,
            userId,
            commentLikes,
            commentReply,
        })

        res.status(201).json({ message: "Comment created successfully", data: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const userId = req.user._id;

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        if (!postId) {
            return res.status(400).json({ error: "Post ID is required" });
        }

        if (!userId) {
            return res.status(401).json({ error: "Please login to view comments" });
        }

        const comments = await Comment.find({ postId }).sort({ createdAt: -1 }).skip(skip).limit(limit)

        res.status(200).json({ message: "Comments fetched successfully", data: comments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}