import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({ setSearchResults, setHideResults }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const inputTimeout = setTimeout(() => {
      fetchData(input);
    }, 500);
    return () => clearTimeout(inputTimeout);
  }, [input]);

  const fetchData = async (value) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en`
    );
    if (value) {
      const { results } = await response.json();

      return setSearchResults(results);
    } 
  };

  const handleChange = (value) => {
    setInput(value);
    setHideResults(value);
  };


  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
