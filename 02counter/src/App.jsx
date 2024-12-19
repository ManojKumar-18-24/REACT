import { useState } from 'react'



function App() {
  const [counter,setCounter]=useState(15)
  const addcounter=()=>{
    setCounter(counter+1)
    console.log(counter)
  }
  const deccounter=()=>{
    setCounter(counter-1)
    console.log(counter)
  }
  return (
    <>
    <h1>Count:{counter}</h1>
    <h1>Count:{counter}</h1>
    <h1>Count:{counter}</h1>
    <h1>Count:{counter}</h1>
    <button onClick={addcounter}>Increase</button>
    <button onClick={deccounter}>Increase</button>
    </>
  )
}

export default App
