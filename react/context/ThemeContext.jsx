import { createContext, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { getTheme } from "../theming";

export const ThemeContextProvider = createContext({});

export const ThemeContext = function ({ children }) {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <ThemeContextProvider.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={getTheme(mode)}>
        <BodyStyle />
        {children}
      </ThemeProvider>
    </ThemeContextProvider.Provider>
  );
};

const BodyStyle = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
      padding: 0;
      box-sizing: border-box;
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${({ theme }) => theme.body.background};
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    
    div {
      font-size: 13px;
    }
`;
