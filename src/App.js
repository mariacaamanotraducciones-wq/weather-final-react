import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Main from "./Main";

function App() {
  const [city, setCity] = useState("Paris");
  return (
    <div className="App">
      <div className="container">
        <Search changeCity={setCity} />
        <Main city={city} />
        <footer className="footer">
          Coded by Maria Caamano and is{" "}
          <a
            href="https://github.com/mariacaamanotraducciones-wq/weather-final-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
