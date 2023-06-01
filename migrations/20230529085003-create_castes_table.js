'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('castes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      caste: {
        type: Sequelize.STRING,
        allowNull: false
      },
      subCaste: {
        type: Sequelize.STRING,
        allowNull: true
      },
      localCaste: {
        type: Sequelize.STRING,
        allowNull: false
      },
      localSubCaste: {
        type: Sequelize.STRING,
        allowNull: true
      },
      hide: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('castes');
  }
};
