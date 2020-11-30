import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@geist-ui/react'

import NewNote from '../components/NewNote'
import NoteList from '../components/NoteList'

export default function Home() {
    let history = useHistory()
    function logOut(){
        console.log('logged out')
        history.push('/')
    }
    return (
        <div>
            <Button onClick={logOut}>Log Out</Button>
            <NewNote/>
            <NoteList/>
        </div>
    )
}
