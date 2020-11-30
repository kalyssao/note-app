import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@geist-ui/react'

export default function Landing() {
    let history = useHistory()
    function logIn(){
        history.push('/login')
    }
    return (
        <div>
            <Button onClick={logIn}>Log In</Button>
        </div>
    )
}
