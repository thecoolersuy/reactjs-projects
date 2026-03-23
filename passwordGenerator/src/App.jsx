import {useState, useCallback,useEffect} from 'react'


function App() {
  const [ length ,setLength] = useState(8)
  const [ number , setNumber] = useState(false)
  const [ char , setChar] = useState(false)
  const [ password, setPassword] = useState("")

  const passwordGenerator=useCallback(()=>{
    let pass =""
    let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercased = string.toLowerCase()
    let totalString = string + lowercased
   
    if(number) totalString += "1234567890"
    if(char) totalString += "!@#$%^&*()"

    for (let i=1; i<= length; i++){
      let rand = Math.floor(Math.random() * totalString.length )
      pass += totalString.charAt(rand)
    }
    setPassword(pass)

  } ,[length,number,char]) 



  useEffect( ()=>{
    passwordGenerator()
  }, [ length, number,char,passwordGenerator])

  
  return (
    <>
      <div className="w-full h-screen bg-black">
        <h1 className ="text-4xl text-white text-center p-10 ">Random Password Generator</h1>
        <div className="bg-gray-800 fixed top-30 inset-x-50 p-5 flex flex-col items-center">
          <div className="flex items-center gap-3">
             <input className="border-2 bg-amber-50" type="text" value = {password} placeholder="Password will be displayed here" readOnly></input>
             <button className = "bg-blue-500 text-white px-3 ml-3">copy</button><br></br><br></br>
          </div>
          <div className="flex items-center gap-3">
             <input  type="range" min={6} max={50} value={length} onChange={(e)=>{ setLength(e.target.value) }}></input>
             <label className ="text-white text-2xl m-2">Length: {length}</label>
             <input type="checkbox" defaultChecked = {number} onChange={ (prev) =>{ setNumber( (prev)=>!prev)}}></input>
             <label className ="text-white text-2xl m-2" >Number</label>
             <input type="checkbox"  defaultChecked = {char}onChange={ (e) =>{setChar( (prev) => !prev)}}></input>
             <label className ="text-white text-2xl m-2">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
