"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className={`d-flex align-items-center justify-center ${darkMode ? "btn btn-outline-light": "btn btn-outline-dark"}`}>
      {darkMode ? <FaSun className="me-2"/> : <FaMoon className="me-2"/>}
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;
