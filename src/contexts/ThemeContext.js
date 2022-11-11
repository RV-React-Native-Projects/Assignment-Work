import React, { createContext } from "react";
import theme from "../../Theme";

const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
