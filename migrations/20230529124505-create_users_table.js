'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user_roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Add foreign key constraints for createdBy, updatedBy, and deletedBy
    await queryInterface.addConstraint('users', {
      fields: ['createdBy'],
      type: 'foreign key',
      references: {
        table: 'user_roles',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('users', {
      fields: ['updatedBy'],
      type: 'foreign key',
      references: {
        table: 'user_roles',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });

    await queryInterface.addConstraint('users', {
      fields: ['deletedBy'],
      type: 'foreign key',
      references: {
        table: 'user_roles',
        field: 'id',
      },
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove foreign key constraints
    await queryInterface.removeConstraint('users', 'users_createdBy_fkey');
    await queryInterface.removeConstraint('users', 'users_updatedBy_fkey');
    await queryInterface.removeConstraint('users', 'users_deletedBy_fkey');

    // Drop the table
    await queryInterface.dropTable('users');
  },
};
