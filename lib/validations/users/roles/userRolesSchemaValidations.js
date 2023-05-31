const Joi = require('joi');

const userRoleSchema = Joi.object({
    role: Joi.string().required(),
});

module.exports = {
    userRoleSchema
}
  