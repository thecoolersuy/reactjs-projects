
import { createContext , useContext } from "react"

export const ThemeContext = createContext({
   modeStatus : "light",
   lightMode : () =>{},
   darkMode : () =>{},
})

export const ThemeContextProvider = ThemeContext.Provider

const useTheme = () =>{
    return useContext(ThemeContext)
}

export default useTheme;