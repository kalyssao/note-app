import React from 'react'
import { Divider, Spacer } from '@geist-ui/react'

import NewNote from '../components/NewNote'
import NoteList from '../components/NoteList'
import Header from '../components/Header'

export default function Home() {
    
    return (
        <div>
            <Header/>
            <NewNote/>
            <Spacer/>
            <NoteList/>
        </div>
    )
}
