// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Study Planner
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
