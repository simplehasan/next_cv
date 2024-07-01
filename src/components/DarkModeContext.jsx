"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-dark");
      document.getElementById("NavBar").classList.remove("navbar-light");
      document.getElementById("NavBar").classList.add("navbar-dark");
      document.getElementById("Card").classList.add("bg-dark", "text-white");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-dark");
      document.getElementById("NavBar").classList.remove("navbar-dark");
      document.getElementById("NavBar").classList.remove("navbar-light");
      document.getElementById("Card").classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
