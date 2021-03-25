const sequelize = require('../config/connection');
const seedRecords = require('./recordData');
const seedUsers = require('./userData');



const seedAll= async () => {
  await sequelize.sync({ force: true });

  await seedRecords();

  await seedUsers();

  process.exit(0);
};

seedAll();
