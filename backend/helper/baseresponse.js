/**
 * 
 * @param {number} status 
 * @param {String} message 
 * @param {Object} data 
 * @returns 
 */
const baseResponse = (status, message, data) => {
    return { status, message, data }
}

module.exports = baseResponse;