import { useState } from 'react'
import { Route } from 'react-router-dom'
import Landing from './views/Landing'
import Login from './components/Login'
import Home from './views/Home'
import Profile from './views/Profile'

const appDiv = {
    'textAlign': 'center',
    'width': '50%',
    'margin': '0 auto',
    'padding': '15%',

}

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div style={appDiv}>
        <Route exact path="/"><Landing/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/profile"><Profile/></Route>
    </div>
  );
}

export default App;
