import Cards from './Cards.jsx'

function App() {
  let  User={
    username : "Suyal",
    description : "He is a sweet guy with quirky personality.",
    quote :  "Click Me!"
  }
  let  User2={
    username : "Ayush",
    description : "He is a sweet guy with quirky personality.",
    quote :  "Read"
  }

  return (
    <>
       <h1 className ="bg-blue-600 text-black rounded-2xl  p-5 mb-6">todoey</h1>
       <Cards obj={User}/>
       <Cards obj={User2}/>
    </>
  )
}

export default App
