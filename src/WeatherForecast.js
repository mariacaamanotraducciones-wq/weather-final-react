import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  if (props.city !== currentCity) {
    setCurrentCity(props.city);
    setLoaded(false);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {/* Loop through the first 5 days of the forecast array */}
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <div className="forecast-day">
                    {formatDay(dailyForecast.time)}
                  </div>
                  <img
                    src={dailyForecast.condition.icon_url}
                    alt={dailyForecast.condition.description}
                    className="forecast-icon"
                    width="42"
                  />
                  <div className="forecast-temperatures">
                    <span className="forecast-temperature-max">
                      {Math.round(dailyForecast.temperature.maximum)}°
                    </span>
                    <span className="forecast-temperature-min">
                      {Math.round(dailyForecast.temperature.minimum)}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "03e34f234b90fab95bd92od60988t445";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null; // Render nothing while fetching to avoid layout jumps
  }
}
