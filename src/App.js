import { useState, useEffect } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import LogInOut from './components/LogInOut'
const config = require('./config')

function App() {
  const [body, setBody] = useState({})

  useEffect(() => {
    fetch(`http://localhost:${config.serverPort}/user`, {
      credentials: 'include' // fetch won't send cookies unless you set credentials
    })
      .then(response => response.json())
      .then(response => setBody(response))
      .catch(e => console.error(e))
  }, [])

  return (
    <div id="App">
      <header>
        <h1>FusionAuth Example: React</h1>
        <Greeting body={body} />
        <LogInOut body={body} uri={`http://localhost:${config.serverPort}`} />
      </header>
    </div>
  )
}

export default App
