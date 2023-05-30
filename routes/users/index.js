const router = require('express').Router()
const userRoles = require('./roles')

/* Mount the user role routes */
router.use('/roles', userRoles)

module.exports = router