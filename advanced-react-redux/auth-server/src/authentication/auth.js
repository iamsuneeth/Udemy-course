const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../../config')

const signUp = (req, res, next) => {
    console.log(req.body)
    const userId = req.body.userId 
    const password = req.body.password 
    if(!userId || !password){
        res.status(400).send({error:"Provide both UserId and Password"})
    }
    User.findOne({userId: userId}, function(err, existingUser){
        if(err) { return next(err) }

        if(existingUser){
            return res.status(422).send({error : 'userId exist'})
        }
        const user = new User({
            userId,
            password
        })

        user.save((err) => {
            if(err) { return next(err)}
            const token = jwt.sign({
                sub: userId
            }, config.secret)

            res.status(201).json({status: "success", message:"user created", user, token})
        })
    })
}

const signIn = (req, res, next) => {
    const token = jwt.sign({
        sub: req.body.userId
    }, config.secret)
    res.status(200).json({status: "success", token})
}

module.exports = {
    signUp,
    signIn
}