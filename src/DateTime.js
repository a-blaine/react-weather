import React from "react";
import "./DateTime.css";

export default function Forecast() {
  return (
    <div className="row location-dt">
      <h1 className="city" id="city">
        Stockholm
      </h1>
      <div className="date-time" id="date">
        Friday 14 April, 2023
      </div>
      <div className="date-time" id="time">
        18:18
      </div>
    </div>
  );
}
