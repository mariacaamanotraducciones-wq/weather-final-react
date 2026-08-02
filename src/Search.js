import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [typedCity, setTypedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (typedCity.trim() !== "") {
      props.changeCity(typedCity);
    }
  }

  function handleCityChange(event) {
    setTypedCity(event.target.value);
  }

  return (
    <header>
      <form id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          className="search-input"
          id="search-input"
          required
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </header>
  );
}
