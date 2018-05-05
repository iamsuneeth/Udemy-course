const authentication = require('./authentication/auth')
const passport = require('passport')
const passportService = require('./services/passport')

const authRequired = passport.authenticate('jwt', { session: false })
const loginRequired = passport.authenticate('local', { session: false })

module.exports.routes = (app) => {
    app.get('/', authRequired, (req, res, next) => {
        res.status(200).send({status: "success"})
    })
    .post('/signup', authentication.signUp)
    .post('/signIn', loginRequired, authentication.signIn)



}