import mongoose, { model, Schema } from "mongoose";

const commentSchema = new Schema({
    commentText: {
        type: String,
        required: true,
    },

    commentReply: {
        type: String,
        default: "",
    },

    commentLikes: {
        type: Number,
        default: 0,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
})

const Comment = model('Comment', commentSchema);

export default Comment;