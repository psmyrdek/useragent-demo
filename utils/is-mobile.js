const parser = require('ua-parser-js')

module.exports = (req) => {
    const ua = parser(req.get('User-Agent'))
    return ua.device.type === 'mobile'
}