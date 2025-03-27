import mongoose, { model, Schema } from 'mongoose';

const postSchema = new Schema({
    content: {
        type: String,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    image: [{
        type: String,
        default: ""
    }],

    imageKitFileId: [{
        type: String,
        default: ""
    }],

    videos: [{
        type: String,
        default: ""
    }],

    videoKitFileId: [{
        type: String,
        default: ""
    }],

}, {timestamps: true});

const Post = model('Post', postSchema);

export default Post;