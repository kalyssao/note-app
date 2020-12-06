const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const noteRouter = require('./controllers/note')
const userRouter = require('./controllers/user')
require('dotenv').config()

const PORT = process.env.PORT || 4000

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

app.use(express.json())
app.use(cors())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

mongoose.connect(process.env.MONGO_DB_URI, config)
.then(() => {
    console.log('Successful connection!')
})
.catch((err) => {
    console.log(err)
})

app.use('/note', noteRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})