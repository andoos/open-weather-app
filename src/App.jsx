import { useEffect, useState } from "react";

import Weather from "./components/Weather";

const api_key = "ccded95de9e5b8a7ccbaa91a22685ebd";
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function App() {
  const [date, setDate] = useState([]);
  const [tempMin, setTempMin] = useState([]);
  const [tempMax, setTempMax] = useState([]);
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather();

      setDate([
        days[new Date(weatherFromServer.list[0].dt * 1000).getDay()],
        days[new Date(weatherFromServer.list[8].dt * 1000).getDay()],
        days[new Date(weatherFromServer.list[16].dt * 1000).getDay()],
        days[new Date(weatherFromServer.list[24].dt * 1000).getDay()],
        days[new Date(weatherFromServer.list[32].dt * 1000).getDay()],
      ]);

      setTempMin([
        Math.floor(weatherFromServer.list[0].main.temp_min) + "°",
        Math.floor(weatherFromServer.list[8].main.temp_min) + "°",
        Math.floor(weatherFromServer.list[16].main.temp_min) + "°",
        Math.floor(weatherFromServer.list[24].main.temp_min) + "°",
        Math.floor(weatherFromServer.list[32].main.temp_min) + "°",
      ]);

      setTempMax([
        Math.floor(weatherFromServer.list[0].main.temp_max) + "°",
        Math.floor(weatherFromServer.list[8].main.temp_max) + "°",
        Math.floor(weatherFromServer.list[16].main.temp_max) + "°",
        Math.floor(weatherFromServer.list[24].main.temp_max) + "°",
        Math.floor(weatherFromServer.list[32].main.temp_max) + "°",
      ]);

      setIcon([
        weatherFromServer.list[0].weather[0].icon,
        weatherFromServer.list[8].weather[0].icon,
        weatherFromServer.list[16].weather[0].icon,
        weatherFromServer.list[24].weather[0].icon,
        weatherFromServer.list[32].weather[0].icon,
      ]);
    };

    getWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=${api_key}`
    );

    const data = await res.json();

    return data;
  };

  return (
    <div className="App">
      <div className="Today">
        <Weather
          id={0}
          date={date}
          icon={icon}
          tempMin={tempMin}
          tempMax={tempMax}
        />
      </div>
      <Weather
        id={1}
        date={date}
        icon={icon}
        tempMin={tempMin}
        tempMax={tempMax}
      />
      <Weather
        id={2}
        date={date}
        icon={icon}
        tempMin={tempMin}
        tempMax={tempMax}
      />
      <Weather
        id={3}
        date={date}
        icon={icon}
        tempMin={tempMin}
        tempMax={tempMax}
      />
      <Weather
        id={4}
        date={date}
        icon={icon}
        tempMin={tempMin}
        tempMax={tempMax}
      />
    </div>
  );
}

export default App;
