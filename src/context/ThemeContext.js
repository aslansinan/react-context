import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ childeren }) => {
    const [theme, setTheme] = useState("dark");

    const values = {
        theme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={values}>{childeren}</ThemeContext.Provider>
    );
}
export default ThemeContext;