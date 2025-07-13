import sequelize from "../config/database.js";
import Role from "./Role.js";
import Permission from "./Permission.js";

const RolePermission = sequelize.define('RolePermission', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    role_id: { type: DataTypes.INTEGER, allowNull: false },
    permission_id: { type: DataTypes.INTEGER, allowNull: false }
},{timestamps: false});



export default RolePermission;