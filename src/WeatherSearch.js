import React from "react";
import Form from "./Form";
import DateTime from "./DateTime";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function WeatherSearch() {
  return (
    <div className="WeatherSearch">
      <div className="container">
        <Form />
        <DateTime />
        <Current />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
