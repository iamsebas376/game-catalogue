import React, { useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
const Search = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(inputValue);
    }
  };

  return (
    <div className="flex bg-gray-300 dark:bg-gray-600 p-2 w-full items-center mx-5 rounded-full dark:text-white">
      <HiOutlineMagnifyingGlass onClick={handleSearch} />
      <input
        type="text"
        placeholder="Search Games"
        className="px-2 bg-transparent outline-none w-full"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        value={inputValue}
      />
    </div>
  );
};

export default Search;
