import { createContext, useState } from "react";
export const ThemeContext=createContext();

function ThemeProvider({children}){
   const [theme,setTheme]=useState("light");

   const data="This is context api class"
   function toggleTheme(){
    setTheme(theme=="light"?"dark":"light");
   }

    return (
        <ThemeContext.Provider  value={{theme,  toggleTheme,data}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;