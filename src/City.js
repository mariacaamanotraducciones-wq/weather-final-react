import React from "react";
import "./City.css";
export default function City(props) {
  return <div className="current-city">{props.value}</div>;
}
