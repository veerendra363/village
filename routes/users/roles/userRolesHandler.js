const { getAllUserRoles } = require("../../../controllers/users/userRolesController")

/**
 * Handler function to get all user roles
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
async function getAllUserRolesHandler (req, res) {
    try {
        const roles = await getAllUserRoles()
        res.json({
            msg: 'success',
            values: roles
        })
    } catch (error) {
        res.json({
            msg: 'fail'
        })
    }
}

module.exports = exports = {
    getAllUserRolesHandler
}