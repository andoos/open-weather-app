function DayCard({ weather }) {
  return (
    <div>
      <h2 className="DateHeader"> {weather.date} </h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt="Weather Icon"
      />
      <div className="TempContainer">
        <p className="MaxTemp"> {weather.tempMin} </p>
        <p className="MinTemp"> {weather.tempMax} </p>
      </div>
    </div>
  );
}

export default DayCard;
