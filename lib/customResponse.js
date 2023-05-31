/**
 * Custom response handler for sending consistent responses.
 * @param {number} statusCode - The HTTP status code of the response.
 * @param {object|string} data - The data or message to be included in the response.
 * @param {object} res - The response object to send the result.
 * @returns {void}
 */
function customResponse (statusCode, data, res) {
    if ([200, 201, 301, 206].indexOf(statusCode) > -1) {
        res.statusCode = statusCode
        res.send({
            success: true,
            data: data
        })
    } else {
        res.statusCode = statusCode
        res.send({
            success: false,
            message: data.message || data
        })
    }
}

module.exports = {
    customResponse
}