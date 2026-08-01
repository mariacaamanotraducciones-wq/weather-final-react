import React from "react";
import "./CurrentWeather.css";
export default function CurrentWeather(props) {
  return (
    <div className="current-weather">
      <span className="icon">{props.icon}</span>
      <span className="current-temperature" id="temperature">
        {props.temperature}
      </span>
      <span className="weather-Unit">{props.unit}</span>
    </div>
  );
}
