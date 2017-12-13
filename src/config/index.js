let debug = process.env.NODE_ENV !== 'production'

let apiDomain
if (process.env.NODE_ENV === 'production') {
    // apiDomain = 'http://font.yunser.com'
    apiDomain = 'http://localhost:1027'
} else {
    apiDomain = 'http://localhost:1027'
}

module.exports = {
    apiDomain,
    debug
}
