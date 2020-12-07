import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@geist-ui/react'

export default function Header() {
    let history = useHistory()
    const [loggedIn, isLoggedIn] = useState(false)
    
    function logOut(){
        localStorage.setItem('loggedIn', 'false')
        history.push('/')
    }
    return (
        <nav>
            <h3>notes.</h3>
            {
                localStorage.getItem('loggedIn') === "true"
                ? <Button onClick={logOut}>Log Out</Button>
                : <></>
            }
        </nav>
    )
}
