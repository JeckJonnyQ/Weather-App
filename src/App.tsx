import { useState } from "react";
import "./App.scss";

import { Weather } from "./components/Weather/Weather";
import getWeather from "./Api/getWeather.tsx";

function App() {
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<null | string>(null);
  const [weather, setWeather] = useState<{
    temp: number;
    description: string;
  } | null>(null);

  function handleGetWeather() {
    setWeather(null);
    getWeather(city, setWeather, setError);
  }

  return (
    <div className="App">
      <div className="weather-app">
        <div className="weather-app__content">
          <div className="weather-app__content-inner">
            <input
              type="text"
              className="weather-app__content_text"
              placeholder="Enter your city..."
              onChange={(e) => setCity(e.currentTarget.value)}
            />
            <button
              className="weather-app__content_btn"
              onClick={handleGetWeather}
            >
              Get weather
            </button>
          </div>

          {weather && (
            <Weather temp={weather.temp} description={weather.description} />
          )}
        </div>

        {error && <p className="weather-app__err">{error}</p>}
      </div>
    </div>
  );
}

export default App;
