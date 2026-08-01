import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <header>
      <form id="search-form">
        <input
          type="text"
          placeholder="Enter a city"
          className="search-imput"
          id="search-input"
          required
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </header>
  );
}
