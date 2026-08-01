import React from "react";
import "./App.css";
import Search from "./Search";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Search />
        <Main />
        <footer>
          Coded by Maria Caamano and is {""}
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
