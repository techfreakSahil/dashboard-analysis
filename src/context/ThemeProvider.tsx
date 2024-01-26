import React, { createContext, useContext, useState, ReactNode } from "react";

interface Theme {
  background: string;
  text: string;
}

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const lightTheme: Theme = {
    background: "#F7F8FA",
    text: "#333",
  };

  const darkTheme: Theme = {
    background: "#2C3E50",
    text: "#fff",
  };

  const currentTheme: Theme = isDarkTheme ? darkTheme : lightTheme;

  const themeContextValue: ThemeContextType = {
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
