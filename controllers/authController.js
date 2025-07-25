import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const singUp = async (req, res) => {
    try{

        const {name, email , password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({where:{email}})
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            
        });

        
        res.status(201).json({ message: "User created successfully", user: newUser });


    }catch(error){
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const login = async (req, res) => {
    try{
const {email,password}= req.body;
if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
}

const user = await User.findOne({where:{email}})
if (!user) {
    return res.status(404).json({ message: "User not found" });
}

const isMatch = await bcrypt.compare(password, user.password)
if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
}

const token = jwt.sign({userId:user.id, roleId:user.role_id}, process.env.JWT_SECRET, {expiresIn: '7d'});

res.status(200).json({
    message: "Login successful", token,user })
    }catch(error){
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}