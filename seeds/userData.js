const { User } = require('../models');
const userData =
[
    {
      "username": "Bobsvinyl",
      "email": "Bobsvinyl@hotmail.com",
      "password": "password12345"
    },
    {
      "username": "PutItonWax",
      "email": "Rupertskillz@gmail.com",
      "password": "password12345"
    },
    {
      "username": "2Turntables",
      "email": "2turntables@aol.com",
      "password": "password12345"
    },
    {
      "username": "AudiophileTed",
      "email": "TedsEars@msn.com",
      "password": "password12345"
    },
    {
      "username": "Bsides",
      "email": "Bsides@yahoo.com",
      "password": "password12345"
    }
  ];
  const seedUsers = () => User.bulkCreate(userData,
    {
      individualHooks: true,
      returning: true,
    });

  module.exports = seedUsers;
  