import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Mon</div>
          <div className="forecast-icon">☀️</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
          </div>
        </div>

        <div className="col">
          <div className="forecast-day">Tue</div>
          <div className="forecast-icon">🌤️</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">18°</span>
            <span className="forecast-temperature-min">11°</span>
          </div>
        </div>

        <div className="col">
          <div className="forecast-day">Wed</div>
          <div className="forecast-icon">🌧️</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">15°</span>
            <span className="forecast-temperature-min">9°</span>
          </div>
        </div>

        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">🌩️</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">14°</span>
            <span className="forecast-temperature-min">8°</span>
          </div>
        </div>

        <div className="col">
          <div className="forecast-day">Fri</div>
          <div className="forecast-icon">☀️</div>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">21°</span>
            <span className="forecast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
