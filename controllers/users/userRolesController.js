
const models = require('../../models'); 

/**
 * Function to get all user roles from the database
 *
 * @returns {Promise<Array>} - A promise that resolves to an array of user roles
 * @throws {Error} - If an error occurs while fetching the roles
 */
async function getAllUserRoles() {
  try {
    const roles = await models.userRoles.findAll({ raw: true });
    return roles;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
}

module.exports = exports = {
    getAllUserRoles
}
