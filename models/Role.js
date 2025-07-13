import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Department from "./Department.js";
import Permission from "./Permission.js";

const Role = sequelize.define('Role',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true }, //  'user', 'admin'
    description: { type: DataTypes.STRING, allowNull: true }, 
    department_id: { type: DataTypes.INTEGER, allowNull: true }, // Foreign key
}, {
    timestamps: true,
})

// Role.belongsTo(Department, { foreignKey: 'department_id' });
// Role.hasMany(User, { foreignKey: 'role_id' });
// Role.belongsToMany(Permission, { through: 'RolePermission', foreignKey: 'role_id' });
export default Role;