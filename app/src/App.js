import { useState } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './views/Landing'
import Login from './components/Login'
import Home from './views/Home'
import Profile from './views/Profile'

const appDiv = {
    'textAlign': 'center',
    'width': '75%',
    'margin': '0 auto',
    'paddingTop': '20%'
}

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div style={appDiv}>
        <Header/>
        <Route exact path="/"><Landing/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/profile"><Profile/></Route>
    </div>
  );
}

export default App;
