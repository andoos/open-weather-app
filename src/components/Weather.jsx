import React from "react";

function Weather({ id, date, icon, tempMin, tempMax }) {
  return (
    <div>
      <h2 className="DateHeader"> {date[id]} </h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon[id]}.png`}
        alt="Weather Icon"
      />
      <div className="TempContainer">
        <p className="MaxTemp"> {tempMin[id]} </p>
        <p className="MinTemp"> {tempMax[id]} </p>
      </div>
    </div>
  );
}

export default Weather;
