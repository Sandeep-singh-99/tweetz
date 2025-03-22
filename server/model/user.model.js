import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new  Schema({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

   profileImage: {
         type: String,
         default: ''
   },

   imageKitFileId: {
         type: String,
   }
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

const User = model('User', userSchema)

export default User;