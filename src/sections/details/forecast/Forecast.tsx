import { IForecastDetails } from "@/api/types/forecast-details";
import Image from "next/image";
import React from "react";

interface ICurrentForecastProps {
  forecast: IForecastDetails;
}

const Forecast = ({ forecast }: ICurrentForecastProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {forecast.list.map((day) => (
          <div key={day.dt} className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </h3>
            <Image
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              width={64}
              height={64}
              className="w-16 h-16 mx-auto"
            />
            <div className="mt-2 text-center">
              <p>Day: {Math.round(day.temp.day - 273.15)}°C</p>
              <p>Night: {Math.round(day.temp.night - 273.15)}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
