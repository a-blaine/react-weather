import React from "react";

export default function Forecast() {
  return (
    <div className="row mt-3">
      <div className="col-11">
        <form id="search-form">
          <input
            type="search"
            name="search-bar"
            id="search-input"
            placeholder="Enter a location"
            className="form-control shadow-sm "
            autocomplete="off"
            autofocus="off"
          />
        </form>
      </div>
      <div className="col-1">
        <button className="btn btn-outline-secondary" id="current-button">
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </div>
    </div>
  );
}
