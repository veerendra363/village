'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add a unique constraint with collation
    await queryInterface.sequelize.query(`
      CREATE UNIQUE INDEX idx_userRoles_role ON userRoles (
        LOWER(role) COLLATE NOCASE
      );
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the unique constraint
    await queryInterface.sequelize.query(`
      DROP INDEX idx_userRoles_role;
    `);
  }
};
