import { useState } from 'react'

function App() {
 
  let [colour, setColour] = useState("bg-white")

  const colorChange =(color) =>{
       console.log("is running")
       setColour(colour = color)
  }
  return (
    <>
      <div className={`w-full h-screen ${colour}`}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-20 px -2  bg-gray-950 p-4 rounded-3xl ">
          <button className="text-white bg-green-500 p-2 rounded-2xl m-6" onClick={ () => colorChange( "bg-green-500") }>Green</button>
          <button className="text-white bg-amber-400 p-2 rounded-2xl m-6" onClick={ () => colorChange( "bg-amber-400") }>Yellow</button>
          <button className="text-white bg-amber-950 p-2 rounded-2xl m-6" onClick={ () => colorChange( "bg-amber-950") }>Brown</button>
          <button className="text-black bg-white p-2 rounded-2xl m-6" onClick={ () => colorChange( "bg-white") }>White</button>
          <button className="text-white bg-blue-700 p-2 rounded-2xl m-6" onClick={ () => colorChange( "bg-blue-700") }>Sea Blue</button>
       </div>
      </div>
    </>
  )
}

export default App
