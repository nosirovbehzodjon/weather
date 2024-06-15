import { IWeatherDetails } from "@/api/types/weather-details";
import { Card } from "@/components/cards";
import Image from "next/image";
import { Fragment } from "react";

interface ICurrentWeatherProps {
  weather: IWeatherDetails;
}

export const Weather = ({ weather }: ICurrentWeatherProps) => {
  const { name, main, weather: weatherDetails, wind, sys, ...rest } = weather;
  const { temp, feels_like, humidity, pressure } = main;
  const weatherIcon = weatherDetails[0].icon;

  return (
    <Fragment>
      <h2 className="text-2xl font-bold mb-4 uppercase text-gray-300">
        DETAILS
      </h2>
      <Card className="py-10 flex  flex-wrap gap-10 items-center">
        <div>
          <h2 className="text-[4rem] font-bold leading-none">{name}</h2>
          <div className="flex items-center">
            <Image
              src={`http://openweathermap.org/img/wn/01d@2x.png`}
              alt={weatherDetails[0].description}
              width={150}
              height={150}
              className="w-150 h-150 -ms-[2.2rem]"
            />
            <div className="ml-4">
              <p className="text-[4rem] leading-none">{Math.round(temp)}°C</p>
              <p className="text-sm text-gray-500 uppercase">
                {weatherDetails[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className=" min-w-[220px] ps-2 border-s-2 border-neutral-700">
          <p className="flex text-gray-400 justify-between text-lg">
            Feels like: <span>{Math.round(feels_like)}°C</span>
          </p>
          <p className="flex text-gray-400 justify-between text-lg">
            Humidity: <span>{humidity}%</span>
          </p>
          <p className="flex text-gray-400 justify-between text-lg">
            Pressure: <span>{pressure} hPa</span>
          </p>
          <p className="flex text-gray-400 justify-between text-lg">
            Wind: <span>{wind.speed} m/s</span>
          </p>
          <p className="flex text-gray-400 justify-between text-lg">
            Sunrise:{" "}
            <span>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</span>
          </p>
          <p className="flex text-gray-400 justify-between text-lg">
            Sunset:{" "}
            <span>{new Date(sys.sunset * 1000).toLocaleTimeString()}</span>
          </p>
        </div>
      </Card>
    </Fragment>
  );
};
