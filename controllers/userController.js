import User from "../models/User.js";
// import bcrypt from "bcryptjs";
import bcrypt from "bcrypt";
export const getAllUsers= async(req, res)=>{

    try{
        const users = await User.findAll()
        res.status(200).json(users);


    }catch(error){
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const getUserById = async (req, res) => {

    try{
const userId = req.params.id;
const user = await User.findByPk(userId)
if (!user) {
    return res.status(404).json({ message: "User not found" });
}
res.status(200).json(user);
    }catch(error){
        console.error("Error fetching user by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}


export const createUser = async (req, res) => {
try{
    const {name , email, password}= req.body
if(!name || !email || !password){
    return res.status(400).json({ message: "Name, email, and password are required" });
}

const hashedPassword = await bcrypt.hash(password, 10);

const newUser = await User.create({
    name,
    email,
    password:hashedPassword,
    // role_id: req.body.role_id || 3,
    // department_id: req.body.department_id || null 
})

res.status(201).json({message: "User created successfully", user: newUser});



}catch(error){
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
}    
}

export const updateUser = async (req, res) => {

    try{
        const userId = req.params.id;

        const {name, email,password,address,phone}= req.body;

        const user = await User.findByPk(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        let updatedUsserr={
            name :name || user.name,
            email: email || user.email, 
            // password: password || user.password,
            address: address || user.address,
            phone: phone || user.phone,

        }
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

await user.update(updatedUsserr);

       
res.status(200).json({ message: "User updated successfully",user });

    }catch(error){
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }



}

export const deleteUser= async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.destroy();
        res.status(200).json({ message: "User deleted successfully" });

    }catch(error){
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}