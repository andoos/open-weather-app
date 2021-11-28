import { useEffect, useState } from "react";

import WeekCard from "./components/WeekCard";

const apiKey = "ccded95de9e5b8a7ccbaa91a22685ebd";
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const weatherFromServer = await fetchWeather();

      const data = [
        {
          date: days[new Date(weatherFromServer.list[0].dt * 1000).getDay()],
          tempMin: Math.floor(weatherFromServer.list[0].main.temp_min) + "°",
          tempMax: Math.floor(weatherFromServer.list[0].main.temp_max) + "°",
          icon: weatherFromServer.list[0].weather[0].icon,
        },
        {
          date: days[new Date(weatherFromServer.list[8].dt * 1000).getDay()],
          tempMin: Math.floor(weatherFromServer.list[8].main.temp_min) + "°",
          tempMax: Math.floor(weatherFromServer.list[8].main.temp_max) + "°",
          icon: weatherFromServer.list[8].weather[0].icon,
        },
        {
          date: days[new Date(weatherFromServer.list[16].dt * 1000).getDay()],
          tempMin: Math.floor(weatherFromServer.list[16].main.temp_min) + "°",
          tempMax: Math.floor(weatherFromServer.list[16].main.temp_max) + "°",
          icon: weatherFromServer.list[16].weather[0].icon,
        },
        {
          date: days[new Date(weatherFromServer.list[24].dt * 1000).getDay()],
          tempMin: Math.floor(weatherFromServer.list[24].main.temp_min) + "°",
          tempMax: Math.floor(weatherFromServer.list[24].main.temp_max) + "°",
          icon: weatherFromServer.list[24].weather[0].icon,
        },
        {
          date: days[new Date(weatherFromServer.list[32].dt * 1000).getDay()],
          tempMin: Math.floor(weatherFromServer.list[32].main.temp_min) + "°",
          tempMax: Math.floor(weatherFromServer.list[32].main.temp_max) + "°",
          icon: weatherFromServer.list[32].weather[0].icon,
        },
      ];

      setWeather(data);
    };

    getWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?" +
        new URLSearchParams({
          q: "toronto,ontario,canada",
          units: "metric",
          appid: apiKey,
        })
    );

    const data = await res.json();

    return data;
  };

  return (
    <div className="App">
      <WeekCard weather={weather} />
    </div>
  );
}

export default App;
