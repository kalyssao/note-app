const express = require('express')
const app = express()
const mongoose = require('mongoose')
const noteRouter = require('./controlllers/note')
require('dotenv').config()

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URI, config)
.then(() => {
    console.log('Successful connection!')
})
.catch((err) => {
    console.log(err)
})

app.use('/note', noteRouter)

app.listen(5000, () => {
    console.log('listening on port', 5000)
})