import DayCard from "./DayCard";

const WeekCard = ({ weather }) => {
  return (
    <div className="WeekContainer">
      {weather.map((e, index) =>
        index === 0 ? (
          <div key={index} className="Today">
            <DayCard key={index} weather={e} />
          </div>
        ) : (
          <DayCard key={index} weather={e} />
        )
      )}
    </div>
  );
};

export default WeekCard;
