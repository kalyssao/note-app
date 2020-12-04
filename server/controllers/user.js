const userRouter = require('express').Router()
const User = require('../models/user')
// bcrypt is used to hash passwords so 
// you don't store straight into the database
const bcrypt = require('bcrypt')

// Signing up
userRouter.post('/sign-up', async(request, response, next) => {
    const username = request.body.username
    // use bcryt to hash the string
    const passwordHash = bcrypt.hashSync(request.body.password, 10)

    if (username && passwordHash){
        const newUser = new User({
            username: username,
            passwordHash: passwordHash
        })
        
        newUser.save()
        .then((res) => {
            response.status(200).send({"message": "Successful sign up"})
        })
        .catch((err) => {
            console.log(err)
            response.status(400).send({"message": "Unable to save"})
        })
    } else {
        response.status(401).send({"message": "missing username or password"})
    }
})

// Login
userRouter.post('/login', async (request, response, next) => {
    const username = request.body.username
    const password = request.body.password

    if(username && password) {
        const user = await User.findOne({username: username})
        if(bcrypt.compareSync(password, user.passwordHash)) {
            response.status(200).send("logged in")
        } else{
            response.status(401).send('incorrect password')
        }
        
    }else {
        response.status(400).send('No username or password')
    }
})

module.exports = userRouter