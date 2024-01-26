import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const lightTheme = {
    background: "#F7F8FA",
    text: "#333",
  };

  const darkTheme = {
    background: "#2C3E50",
    text: "#fff",
  };

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const themeContextValue = {
    isDarkTheme,
    toggleTheme,
    theme: currentTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
