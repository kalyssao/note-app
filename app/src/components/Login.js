import React, { useState } from 'react'
import { Note, Input, Button, Spacer } from '@geist-ui/react'
import { useHistory } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

export default function Login() {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'https://kalyssa-notes-app.herokuapp.com'

    let history = useHistory()
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(false)
    
    
    function handleUsername(event){
        setUsername(event.target.value)
    }

    function handlePassword(event){
        setPassword(event.target.value)
    }
    function logIn(){
        axios.post(`${API_ENDPOINT}/login`, {
            username: username,
            password: password
        }).then((res) => {
            if(res.status === 200){
                localStorage.setItem('loggedIn', 'true')
                history.push("/home")
            }
        }).catch((err) => {
            console.log(err)
            setError(true)
        })
    }

    return (
        <div>
            <Header/>
            <Spacer/>
            {
                error
                ? <Note width="48%" type="error" label="error">Incorrect username or password</Note>
                : <></>

            }
            
            <Input 
            width="48%"
            value={username} 
            onChange={handleUsername} 
            placeholder="Username"/>

            <Spacer/>

            <Input.Password 
            width="48%"
            value={password}
            onChange={handlePassword}
            placeholder="Password"/>
            <Spacer/>

            <Button size="medium" onClick={logIn}>Log In</Button>
            
        </div>
    )
}
