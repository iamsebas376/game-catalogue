import React, { useContext } from "react";
import logo from "./../assets/images/navbar-logo.png";
import { HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import Search from "./Search";

function Navbar({ setSearchTerm }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3 ">
      <img src={logo} width={60} height={60} />
      <Search setSearchTerm={setSearchTerm} />
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-gray-300 dark:bg-gray-600 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-gray-300 dark:bg-gray-600 text-white p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
