const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const User = new Schema({
    userId: {type: String, unique: true, lowercase: true},
    password: String
})

User.pre('save', function(next){
    const user = this

    bcrypt.genSalt(10, (err, salt) => {
        if(err){ return next(err) }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err){ return next(err) }
            user.password = hash
            next()
        })
    })
})

User.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) { return callback(err)}
        callback(null, isMatch)
    })
}

const UserModel = mongoose.model("User",User)

module.exports =  UserModel

