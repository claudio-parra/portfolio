import React, { useState, useEffect } from "react"
import { FaLinkedin, FaGithub, FaMoon } from "react-icons/fa"
import { MdWbSunny } from "react-icons/md";

const Navbar = () => {
  const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useState(userPrefersDark ? "dark" : "light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => {
      setTheme(e.matches ? "dark" : "light")
    }
    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
    <div className="flex flex-shrink-0 items-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          &lt;C P /&gt;
        </div>
    </div>


      {/* Icons Section */}
      <div className="flex items-center">
        {/* Social Icons */}
        <div className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800">
          <a href="https://www.linkedin.com/in/c-parra/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl cursor-pointer" />
          </a>
        </div>
        <div className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800">
          <a href="https://github.com/claudio-parra" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl cursor-pointer" />
          </a>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {theme === "light" ? (
            <FaMoon className="text-2xl text-gray-800 dark:text-gray-200" />
          ) : (
            <MdWbSunny className="text-2xl text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
