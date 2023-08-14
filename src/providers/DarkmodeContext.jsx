import { createContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext({});

export const DarkmodeProvider = ({children}) => {
    const localDarkmode = localStorage.getItem("@DARKMODE");
    const [darkMode, setDarkMode] = useState(localDarkmode ? localDarkmode : "LIGHT");

    useEffect(() => {
        localStorage.setItem("@DARKMODE", darkMode);
    }, [darkMode]);

    const changeColorMode = () => {
        setDarkMode(darkMode === "LIGHT" ? "DARK" : "LIGHT");
    }

    return(
        <DarkmodeContext.Provider value={{ darkMode, changeColorMode }}>
            {children}
        </DarkmodeContext.Provider>
    )
}

/* estrutura sintática básica
import { createContext } from "react";

export const SomeContext = createContext({});

export const SomeProvider = ({children}) => {
    return(
        <SomeContext.Provider value={{}}>
            {children}
        </SomeContext.Provider>
    )
}
*/