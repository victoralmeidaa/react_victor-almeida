import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/Navbar.css"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      
      <button
        className={`dark-mode-toggle ${darkMode ? "active" : ""}`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <span className="icon">
          {darkMode ? <FaSun /> : <FaMoon />}
        </span>
      </button>
    </nav>
  );
}
