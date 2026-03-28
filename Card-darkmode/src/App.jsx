
import Card from "./components/Card"
import Button from "./components/Button"
import { ThemeContextProvider } from "./context/Theme"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [modeStatus, setModeStatus] = useState("light")
  const lightMode =()=>{
    setModeStatus("light")
  }
  const darkMode =() =>{
    setModeStatus("dark")
  }

  useEffect( () =>{
     document.querySelector("html").classList.remove("light", "dark")
     document.querySelector("html").classList.add(modeStatus)
  } ,[modeStatus])

  return (
    <ThemeContextProvider value={{modeStatus, lightMode, darkMode}}>
    <>
     <div className="w-full h-screen bg-[#e9e9e9] dark:bg-[#0a0a0a]">
        <div className="flex item-center justify-center pt-3">
          <Button />
        </div>
        
        <div className="flex flex-wrap gap-6 p-10 justify-center">
        <Card imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png"}
        companyName={"Google"}
        role={"Senior UI/UX Designer"}
        infoCard1={"Part-time"}
        infoCard2={"Senior-level"}
        payment={"120"}
        location={"San Francisco, CA"}
        />
        <Card imageUrl={"https://www.freeiconspng.com/thumbs/amazon-icon/amazon-icon--socialmedia-iconset--uiconstock-0.png"}
        companyName={"Amazon"}
        role={"Graphic Designer"}
        infoCard1={"Full-time"}
        infoCard2={"Flexible schedule"}
        payment={"150-220"}
        location={"Mountain View, CA"}/>
        <Card imageUrl={"https://cdn-icons-png.flaticon.com/512/0/747.png"}
        companyName={"Apple"}
        role={"UX Designer"}
        infoCard1={"Full-time"}
        infoCard2={"In office"}
        payment={"200-250"}
        location={"New York, NY"}/>
      </div>
      </div> 
    </>
    </ThemeContextProvider>
  )
}

export default App
