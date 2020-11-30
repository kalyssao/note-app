const noteRouter = require('express').Router()
const Note = require('../models/note')

noteRouter.get('/', (request, response, next) => {
    Note.find({}).then(res => {
        response.status(200).send({message: "successful"})
        next()
    })
})

noteRouter.post('/', async (request, response, next) => {
    const { title, content } = request.body
    console.log(request.body)
    
    if (title && content) {
        const noteCount = await Note.countDocuments()
        const newNote = new Note({
            id: noteCount + 1,
            title: title,
            content: content
        })
    
        newNote.save()
        .then( res => {
            response.status(201).send({message: 'success!', res})
        })
        .catch(err => {
            console.log(err)
        })
    } else {
        response.status(400).send({message: 'You are missing either a title or your content'})
    }
})

module.exports = noteRouter