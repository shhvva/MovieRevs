import React, { useState } from "react";
import { data } from "./data.js";

const Searchbar = ({ handleMovieSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="Searchbox_and_Res">
      <div className="Searchbox">
        <div className="web_logo" onClick={() => window.location.reload()}>
          Movie Revs
        </div>
        <input
          id="Search_bar"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
        />
        <div className="Name">
          <a href="https://shhvva.github.io/portfolio/" target="_blank">
            shva
          </a>
        </div>
      </div>
      <div className="Resultbox">
        <ul>
          {data
            .filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
              <li
                key={item.id}
                className="movies_list"
                onClick={() => handleMovieSelect(item)}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
