
const { CREATED_AT, UPDATED_AT } = require('../../../lib/constant');
const models = require('../../../models'); 

/**
 * Function to get all user roles from the database
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of user roles
 * @throws {Error} - If an error occurs while fetching the roles
 */
async function getAllUserRoles() {
  try {
    const roles = await models.userRoles.findAll({ attributes:['id', 'role'], raw: true })
    return roles
  } catch (error) {
    console.error('Error fetching roles:', error)
    throw error
  }
}

/**
 * Function to creates a new user role in the database.
 *
 * @param {Object} data - The data for the new user role.
 * @param {string} data.roleName - The name of the role.
 * @returns {Promise<Object>} The newly created user role.
 * @throws {Error} If there was an error adding the role.
 */
async function addNewUserRole(data) {
  try {
    data.createdAt = CREATED_AT
    data.updatedAt = UPDATED_AT
    const newRole = await models.userRoles.create(data)
    return newRole
  } catch (error) {
    console.error('Error adding role:', error);
    throw error
  }
}

module.exports = exports = {
    getAllUserRoles,
    addNewUserRole
}
