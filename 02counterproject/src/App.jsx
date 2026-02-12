import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15); 
  // let counter = 50;
  
  const addval = ()=>{
    console.log("Addval  Clicked",counter);
    if(counter === 20){
      return;
    }
    setcounter(counter + 1)
  }

  const remval = ()=>{
    console.log("remval Clicked", counter);
    if(counter === 0){
      return;
    }
    setcounter(counter - 1);
  }
  
  return (
    <>
    <h1>Harshit arora</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addval}>Add value</button>
    <br />
    <button onClick={remval}>remove value</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
