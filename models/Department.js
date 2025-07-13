import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js"; 
import Role from "./Role.js"; 

const Department = sequelize.define('Department', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },   
    description: { type: DataTypes.STRING, allowNull: true }, 
    

    }, {
    timestamps: true,   
});
// Department.hasMany(User, { foreignKey: 'department_id' });
// Department.hasMany(Role, { foreignKey: 'department_id' });

export default Department;
