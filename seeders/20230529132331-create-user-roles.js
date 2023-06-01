'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const roles = [
      {
        role: 'Administrator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 'Village Head',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 'Staff Member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 'Resident',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: 'Guest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('userRoles', roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userRoles', null, {});
  },
};
