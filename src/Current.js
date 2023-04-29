import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div>
      <div className="row current-information">
        <div className="col my-auto current-contents-left">
          <span className="high-low-temp">
            <strong id="current-high-temp">11°</strong>/
            <span className="low-temp" id="current-low-temp">
              8°
            </span>
          </span>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Weather icon"
            id="icon"
          />
        </div>

        <div className="col my-auto current-contents-center">
          <span id="current-temperature">3</span>
          <span className="units">
            <a id="celsius-link" href="#">
              °C
            </a>
            |
            <a className="inactive" id="fahrenheit-link" href="#">
              °F
            </a>
          </span>
        </div>

        <div className="col my-auto current-contents-right">
          <div className="description" id="description">
            Cloudy
          </div>
          <ul className="weather-details">
            <li>
              Feels like: <span id="feels-like">8°</span>
            </li>
            <li>
              Humidity: <span id="humidity">87%</span>
            </li>
            <li>
              Wind: <span id="wind">4km/h</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
