import React from "react";
import useWeather from "../hooks/useWeather";
import Forecast from "../components/Forecast/Forecast";
import Today from "../components/Today";

const Weather = () => {
  const [temperature, location, weather, forecast] = useWeather();

  return (
    <div className="container">
      <div className="flex flex-wrap h-full mt-[16px] justify-evenly">
        {/* TODAY WEATHER */}
        <Today
          location={location}
          temperature={temperature}
          weather={weather}
        />

        {/* WEEK FORECAST */}
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
};

export default Weather;
