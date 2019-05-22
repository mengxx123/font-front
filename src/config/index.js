let debug = process.env.NODE_ENV !== 'production'

let apiDomain
if (process.env.NODE_ENV === 'production') {
    // apiDomain = 'https://fontapi.yunser.com'
    apiDomain = 'https://nodeapi.yunser.com'
} else {
    apiDomain = 'http://localhost:1026'
    // apiDomain = 'https://fontapi.yunser.com'
}

module.exports = {
    apiDomain,
    debug
}
