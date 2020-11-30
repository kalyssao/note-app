import axios from 'axios'
import React, { useState } from 'react'
import { Card, Button } from '@geist-ui/react'

function Note({ title, content }) {
    return(
        <Card> 
            {title}
            <br/>
            {content}
        </Card>
        
    )
}

export default function NoteList() {
    const [ notes, setNotes ] = useState([])

    function loadAll(){
        axios.get("http://localhost:5000/note")
        .then((res) => {
            setNotes(...notes, res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <Button onClick={loadAll}>Load all</Button>
            <ul>
                { 
                
                notes.length === 0
                ?   <></> 
                : 
                    <>
                        {notes.map(note => (
                            <li key={note.id}>
                            <Note title={note.title} content={note.content}/>
                            </li>
                        ))}
                    
                    </>
                }
                
            </ul>
        </div>
    )
}
