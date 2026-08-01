import React from "react";
import "./App.css";
import Search from "./Search";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Main />

        {/* Footer moved here, right before the closing container div */}
        <footer className="footer">
          Coded by Maria Caamano and is{" "}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
