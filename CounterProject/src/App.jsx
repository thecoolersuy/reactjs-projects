import { useState } from "react"

  


function App() {
  
  const [errors, setErrors] = useState("")
  const [counter, setCounter] = useState(0)

  const addCounter = () =>{
    if( counter < 20){
      console.log(`value added ${counter}`)
      setCounter(counter+1)
    }else{
      setErrors("Cant exceed 20")
    }
    
  }

  const removeValue =()=>{
    console.log("removed")
    if(counter <=0){
      setErrors("Numbers is limited to positive")
      console.log(errors)
    }else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
     <h1>Counter Project</h1>
     <p>Click the button below, each click registers a number and it will increase the more you click.Try it Out!</p>
     <button onClick={addCounter}>counter : {counter}</button>
     <button onClick={removeValue}>Remove value</button>
     <p>{errors}</p>
    </>
  )
}

export default App
