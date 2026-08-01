import React from "react";
import "./Details.css";
export default function Details(props) {
  return (
    <p className="details">
      <span>
        {props.day} {props.time}
      </span>
      <span id="description">, {props.description}</span>
      <br />
      Humidity: <strong id="humidity">{props.humidity}</strong>, Wind:
      <strong id="wind-speed"> {props.wind}</strong>
    </p>
  );
}
