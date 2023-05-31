const Joi = require("joi");
const { customResponse } = require("./customResponse");

/**
 * This function returns a function which takes an API request and validates(only params, query, and body ) the schema provided below as arguments.
 * 
 * Params: Joi validation can be used to validate the route parameters extracted from the URL path. 
 * Route parameters are part of the URL and represent dynamic values. For example, 
 * if you have a route like /users/:id, you can use Joi to validate the id parameter extracted from the URL.
 * 
 * Query Parameters: Joi validation can be applied to the query parameters appended to the URL. 
 * Query parameters provide additional information to the server and are commonly used for filtering, sorting, or specifying options. 
 * Joi can be used to validate the query parameters to ensure they meet the expected format, data types, or constraints.
 * 
 * Body: Joi validation is often used to validate the data sent in the body of an HTTP request. 
 * The body can contain various types of data, such as JSON, form data, or XML. Joi allows you to define a validation schema or rules 
 * that the data must adhere to, ensuring that the received data is valid before processing it further.
 * 
 * @param {Object} schema request's query, params, body joi schema
 */
function requestValidator (schema) {
    return (req, res, next) => {
        let error;
        if(schema){
            data = { ...req.query, ...req.params, ...req.body}
            const {error} = schema.validate(data)
            if (error) {
                customResponse(400, error.details, res)
            } else {
                next()
            }
        } else {
            next()
        }
    }
 }

 module.exports = exports = {
    requestValidator
 }