// keys.js figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    // we are in production - return the prod set of keys
    // import from ./dev and export to app that requested keys
    module.exports = require('./prod');

} else {
    // we are in development - return the dev keys!!!
    // import from ./dev and export to app that requested keys
    module.exports = require('./dev');

}