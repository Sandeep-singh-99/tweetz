import User from "../model/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import imageKit from "../utils/imagekit.js";

export const register = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }

        if (!req.file) {
            return res.status(400).json({ error: "Please upload an image" });
        }

        const uploadResponse = await imageKit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: '/social-media-app'
        })

        const newUser = await User.create({
            fullName,
            email,
            password,
            profileImage: uploadResponse.url,
            imageKitFileId: uploadResponse.fileId
        })

       if (newUser) {
        generateToken(newUser._id, res)
        res.status(201).json({ _id: newUser._id, fullName: newUser.fullName, email: newUser.email ,message: "User registered successfully" });
       } else {
        res.status(400).json({ error: "Invalid user data" });
       }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill in all fields" });
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "User does not exist" });
        }

        const isPasswordMatch = await user.comparePassword(password)
        if (!isPasswordMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        generateToken(user._id, res)
        res.status(200).json({ _id: user._id, fullName: user.fullName, email: user.email, message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const logout = async (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const checkAuth = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({ error: error.message  });
    }
}


export const updateProfile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Please upload an image" });
        }

        const uploadResponse = await imageKit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: '/social-media-app'
        })

        const profilepic = await User.findById(req.user._id)
        if (profilepic.profileImage) {
            await imageKit.deleteFile(profilepic.imageKitFileId)
        }

        const updatedProfilePic = await User.findByIdAndUpdate(req.user._id , {
            profileImage: uploadResponse.url,
            imageKitFileId: uploadResponse.fileId
        })

        res.status(200).json({ updatedProfilePic, message: "Profile updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}