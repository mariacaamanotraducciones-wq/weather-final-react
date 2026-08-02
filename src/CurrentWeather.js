import React, { useState } from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="current-weather">
        <div className="weather-details-section">
          <h1 className="current-city">{weatherData.city}</h1>
          <p className="weather-subtext">
            <FormattedDate date={weatherData.date} />,{" "}
            <span className="description text-capitalize">
              {weatherData.description}
            </span>
          </p>
          <p className="weather-subtext">
            Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
            <strong>{weatherData.wind} km/h</strong>
          </p>
        </div>

        <div className="temperature-section">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="weather-icon"
          />
          <span className="current-temperature" id="temperature">
            {weatherData.temperature}
          </span>
          <span className="weather-Unit">{props.unit}</span>
        </div>
      </div>
    );
  } else {
    const apiKey = "03e34f234b90fab95bd92od60988t445";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.value}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <div className="loading">Loading...</div>;
  }
}
