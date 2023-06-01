'use strict';
const bcrypt = require('bcrypt');
const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash('password123', 10);
    const userRole = await models.userRoles.findOne({attributes: ['id'], where: {role: 'Administrator'}})
    const caste = await models.castes.findOne({attribute: ['id']})


    await queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
        phoneNumber: '1234567890',
        email: 'johndoe@example.com',
        password: password,
        isHead: false,
        headId: null,
        dob: null,
        roleId: userRole.id,
        casteId: caste.id,
        createdBy: null,
        updatedBy: null,
        deletedAt: null,
        deletedBy: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
