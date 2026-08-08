import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import "./Main.css";

export default function Main(props) {
  return (
    <main>
      <div className="today-weather">
        <CurrentWeather value={props.city} />
      </div>
      <WeatherForecast city={props.city} />
    </main>
  );
}
