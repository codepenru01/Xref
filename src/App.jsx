import { useState } from 'react'
import Header from "./Header"
import Hero from "./Hero"
import Intro from "./Intro"
import Ref from "./Ref"
import Digital from "./Digital"
import Teams from "./Teams"
import Our from "./Our"
import Footer from "./Footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Intro/>
      <Ref/>
      <Digital/>
      <Teams/>
      <Our/>
      <Footer/>
    </div>
  )
}

export default App
