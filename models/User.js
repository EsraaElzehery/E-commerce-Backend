import { DataTypes } from "sequelize";
// import sequelize from "../config/database.js";
import sequelize from "../config/database.js";
 import Department from "./Department.js";
import Role from "./Role.js";

const User = sequelize.define('User',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique:true},
    password:{type:DataTypes.STRING, allowNull:false},
    address:{type:DataTypes.STRING, allowNull:true},
    phone:{type:DataTypes.STRING, allowNull:true},
    role_id:{type:DataTypes.INTEGER, allowNull:false, defaultValue:3},
    department_id:{type:DataTypes.INTEGER, allowNull:true, defaultValue:null},
    createdAt:{type:DataTypes.DATE, defaultValue:DataTypes.NOW},
},{
    timestamps:true,
   
})

// User.belongsTo(Department, { foreignKey: 'department_id' });

// User.belongsTo(Role, { foreignKey: 'role_id' });


export default User;
