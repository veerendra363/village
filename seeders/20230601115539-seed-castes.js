'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert sample data for 'castes' table
    await queryInterface.bulkInsert('castes', [
      {
        caste: 'OC',
        subCaste: null,
        localCaste: 'Reddy',
        localSubCaste: null,
        hide: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all rows from 'castes' table
    await queryInterface.bulkDelete('castes', null, {});
  }
};
