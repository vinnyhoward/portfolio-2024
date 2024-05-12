"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useLayoutEffect,
} from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? darkTheme : lightTheme);

    if (theme.name === "light") {
      localStorage.setItem("theme", JSON.stringify(darkTheme));
    } else {
      localStorage.setItem("theme", JSON.stringify(lightTheme));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
