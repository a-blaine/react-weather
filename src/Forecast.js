import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast-container" id="forecast">
      <div class="row">
        <div class="col-2">
          <div class="forecast-day">Tue</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="forecast-temperature">
            <span
              class="forecast-temperature-max"
              id="forecast-temperature-max"
            >
              10°
            </span>
            /<span class="low-temp forecast-temperature-min">8°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="forecast-day">Wed</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="forecast-temperature">
            <span
              class="forecast-temperature-max"
              id="forecast-temperature-max"
            >
              10°
            </span>
            /<span class="low-temp forecast-temperature-min">8°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="forecast-day">Thu</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="forecast-temperature">
            <span
              class="forecast-temperature-max"
              id="forecast-temperature-max"
            >
              10°
            </span>
            /<span class="low-temp forecast-temperature-min">8°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="forecast-day">Fri</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="forecast-temperature">
            <span
              class="forecast-temperature-max"
              id="forecast-temperature-max"
            >
              10°
            </span>
            /<span class="low-temp forecast-temperature-min">8°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="forecast-day">Sat</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="forecast-temperature">
            <span
              class="forecast-temperature-max"
              id="forecast-temperature-max"
            >
              10°
            </span>
            /<span class="low-temp forecast-temperature-min">8°</span>
          </div>
        </div>
        <div class="col-2">
          <div class="forecast-day">Sun</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="forecast-temperature">
            <span
              class="forecast-temperature-max"
              id="forecast-temperature-max"
            >
              10°
            </span>
            /<span class="low-temp forecast-temperature-min">8°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
