const router = require('express').Router()

/* Handlers initialization */
const user = require('./users')

/* Mount the user routes */
router.use('/user', user) 


module.exports = router