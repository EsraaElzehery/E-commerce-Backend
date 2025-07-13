import Role from '../models/Role.js';
import sequelize from '../config/database.js';

async function seedRoles() {
  try {
    // Connect to DB
    await sequelize.authenticate();
    console.log('✅ Connected to database');

    // Seed default roles
    await Role.bulkCreate([
      { id: 1, name: 'admin' },
      { id: 2, name: 'manager' },
      { id: 3, name: 'user' },
    ], { ignoreDuplicates: true });

    console.log('✅ Roles seeded successfully!');
    process.exit(); // Exit after finish
  } catch (error) {
    console.error('❌ Error seeding roles:', error);
    process.exit(1);
  }
}

seedRoles();