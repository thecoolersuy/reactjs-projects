import { createContext ,useContext} from "react";

export const themeContext = createContext({
    themeMode : "white",
    darkTheme : () =>{},
    lightTheme :() =>{}
})

export const ThemeProvider = themeContext.Provider

const useTheme = () =>{
    return useContext(themeContext)
}

export default useTheme;
