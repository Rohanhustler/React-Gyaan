import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : function () {

    },
    lightTheme : function () {

    }
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext);
}