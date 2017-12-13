let debug = process.env.NODE_ENV !== 'production'

let apiDomain
if (process.env.NODE_ENV === 'production') {
    apiDomain = 'http://api.font.yunser.com'
} else {
    apiDomain = 'http://localhost:1027'
    // apiDomain = 'http://api.font.yunser.com'
}

module.exports = {
    apiDomain,
    debug
}
