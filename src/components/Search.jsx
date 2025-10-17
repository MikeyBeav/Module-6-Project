import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("characters");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/${type}?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <select value={type} onChange={handleTypeChange}>
          <option value="characters">Characters</option>
          <option value="locations">Locations</option>
          <option value="episodes">Episodes</option>
        </select>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={`Search ${type}...`}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
