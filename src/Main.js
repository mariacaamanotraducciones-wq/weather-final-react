import React from "react";
import City from "./City";
import Details from "./Details";
import CurrentWeather from "./CurrentWeather";
import "./Main.css";
export default function Main() {
  return (
    <main>
      <div className="today-weather">
        <div>
          <h1>
            <City value="Paris" />
          </h1>
          <Details
            day="Sunday"
            time="11:00"
            description="Sunny"
            humidity="40%"
            wind="0.5 km/h"
          />
        </div>
        <CurrentWeather icon="☀️" temperature={38} unit="°C" />
      </div>
    </main>
  );
}
