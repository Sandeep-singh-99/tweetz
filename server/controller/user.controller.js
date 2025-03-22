import User from "../model/user.model";

export const register = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}