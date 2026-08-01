import React from "react";
import CurrentWeather from "./CurrentWeather";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className="today-weather">
        <CurrentWeather value="Paris" unit="°C" />
      </div>
    </main>
  );
}
