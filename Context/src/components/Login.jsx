import React from 'react'
import userContext from '../context/userContext'
import { useContext } from 'react'


function Login() {

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const {setUser} = useContext(userContext)

  const handleSubmit =() =>{
    console.log("username:", username)   // add this
    console.log("password:", password) 
      console.log("clicked")
      setUser({username,password})
  }
  return (
    <>
     <div className="w-200 h-20 bg-green-600">
      <h1>Login</h1>
      <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type='text' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleSubmit}>Login</button>

     </div>
    </>
  )
}

export default Login