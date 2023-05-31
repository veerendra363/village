const router = require('express').Router()

const { requestValidator } = require('../../../lib/requestValidator')
const { userRoleSchema } = require('../../../lib/validations/users/roles/userRolesSchemaValidations')
const { getAllUserRolesHandler, addNewUserRoleHandler } = require('./userRolesHandler')

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

/**
 * @api {post} vlg/user/roles
 * @apiGroup User Roles
 * @apiName AddNewUserRole
 * @apiDescription Adds a new user role.
 *
 * @apiSuccess {String} message Success message confirming the addition of the user role.
 * @apiSuccessExample {json} Success Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User role added successfully."
 *     }
 */
router.post('/', requestValidator(userRoleSchema), addNewUserRoleHandler)

module.exports = router