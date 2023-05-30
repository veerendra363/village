const router = require('express').Router()

const { getAllUserRolesHandler } = require('./userRolesHandler')

/**
 * @api {get} vlg/user/roles
 * @apiGroup User Roles
 * @apiName GetAllUserRoles
 * @apiDescription Retrieves all user roles.
 *
 * @apiSuccess {Array} roles Array of user roles.
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": 1,
 *         "role": "Admin"
 *       },
 *       {
 *         "id": 2,
 *         "role": "User"
 *       }
 *     ]
 */
router.get('/', getAllUserRolesHandler)

module.exports = router