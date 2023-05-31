const { getAllUserRoles, addNewUserRole } = require("../../../controllers/users/roles/userRolesController")
const { customResponse } = require("../../../lib/customResponse")

/**
 * getAllUserRolesHandler function to get all user roles
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function getAllUserRolesHandler (req, res) {
    try {
        const roles = await getAllUserRoles()
        customResponse(200, roles, res)
    } catch (error) {
        customResponse(400, error, res)
    }
}

/**
 * addNewUserRoleHandler function to add a new user role
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function addNewUserRoleHandler (req, res) {
    try {
        const newRole = await addNewUserRole(req.body)
        customResponse(200, newRole, res)
    } catch (error) {
        customResponse(400, error, res)
    }
}

module.exports = exports = {
    getAllUserRolesHandler,
    addNewUserRoleHandler
}