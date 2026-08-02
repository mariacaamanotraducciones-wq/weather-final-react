import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./Main.css";

export default function Main(props) {
  return (
    <main>
      <div className="today-weather">
        <CurrentWeather value={props.city} />
      </div>
    </main>
  );
}
