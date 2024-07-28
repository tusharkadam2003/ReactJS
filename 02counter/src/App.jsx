import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)
  
  const increaseValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
     
  }

  const decreaseValue = () => {
    
    if (counter > 0) {
      setCounter(counter - 1)
    }
  
  }

  return (
    <>
      <h1>Tushar Kadam</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button> <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
