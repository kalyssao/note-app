import React, { useState } from 'react'
import axios from 'axios'
import { Note, Card, Input, Spacer, Textarea, Button } from '@geist-ui/react'

export default function NewNote() {
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    const [ success, setSuccess ] = useState(false)

    function handleTitle(event){
        setTitle(event.target.value)
    }

    function handleContent(event){
        setContent(event.target.value)
    }

    function addNote(){
        axios.post("http://localhost:7000/note", {
            "title": title,
            "content": content
        })
        .then((res) => {
            console.log(res.body)
        })
        .catch((err) => {
            console.log(err)
        })
        setTitle('')
        setContent('')
    }

    return (
        <Card shadow>
            { success
            ? <Note label={false}>Successfully added note!</Note>
            : <></>
            }
            <Input value={title} onChange={handleTitle} placeholder="Title"></Input>

            <Spacer/>

            <Textarea 
            value={content}
            onChange={handleContent} 
            placeholder="Enter your note content"/>

            <Spacer/>
            <Button onClick={addNote}>Add Note!</Button>

        </Card>
    )
}
