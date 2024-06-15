import { IForecastDetails } from "@/api/types/forecast-details";
import { Card } from "@/components/cards";
import Image from "next/image";
import React from "react";

interface ICurrentForecastProps {
  forecast: IForecastDetails;
}

const Forecast = ({ forecast }: ICurrentForecastProps) => {
  return (
    <div className="mt-6 w-full justi">
      <h2 className="text-2xl font-bold mb-4 uppercase mt-20 text-gray-300">
        Seven Day Forecast
      </h2>
      <div className="flex flex-wrap gap-1 justify-between">
        {forecast.list.map((day) => (
          <Card className="min-w-[200px]" key={day.dt}>
            <h3 className="text-sm text-gray-200 font-semibold">
              {new Date(day.dt * 1000).toLocaleDateString()}
            </h3>
            <div className="flex justify-between">
              <Image
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                width={70}
                height={70}
              />
              <div className="mt-2 w-[90px] text-center">
                <p className="flex text-gray-400 justify-between">
                  Day: <span>{Math.round(day.temp.day - 273.15)}°C</span>
                </p>
                <p className="flex justify-between">
                  Night: <span>{Math.round(day.temp.night - 273.15)}°C</span>
                </p>
                <p className="text-[10px] text-left uppercase">
                  {day.weather[0].description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
