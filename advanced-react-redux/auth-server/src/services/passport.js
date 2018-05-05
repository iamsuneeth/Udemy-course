const passport = require('passport')
const config = require('../../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const User = require('../models/user')

const localOptions = {
    usernameField: 'userId'
}
const localLogin = new LocalStrategy(localOptions, function(userId, password, done){
   
    User.findOne({userId}, (err, user) => {
        if(err) { return done(err)}
        if(!user) { return done(null, false)}
        if(user){
            user.comparePassword(password, function(err, isMatch){
                if(err) { return done(err)}
                if(!isMatch) {return done(null ,false)}
                return done(null ,true)
            })
        }
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findOne({userId: payload.sub}, (err, user) => {
        if(err) {return done(err, false)}

        if(user){
            return done(null, user)  
        }else{
            return done(null, false)
        }
    })
})

passport.use(jwtLogin)
passport.use(localLogin)