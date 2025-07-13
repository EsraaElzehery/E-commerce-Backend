import User from './User.js';
import Role from './Role.js';
import Department from './Department.js';
import Permission from './Permission.js';

// الدالة اللي بتعمل كل العلاقات
export default function setupAssociations() {
  // user belongs to department
  User.belongsTo(Department, { foreignKey: 'department_id' });
  Department.hasMany(User, { foreignKey: 'department_id' });

  // user belongs to role
  User.belongsTo(Role, { foreignKey: 'role_id' });
  Role.hasMany(User, { foreignKey: 'role_id' });

  // role belongsToMany permission (many to many)
  Role.belongsToMany(Permission, {
    through: 'RolePermission',
    foreignKey: 'role_id'
  });
  Permission.belongsToMany(Role, {
    through: 'RolePermission',
    foreignKey: 'permission_id'
  });
}