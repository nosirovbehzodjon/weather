import { IWeatherDetails } from "@/api/types/weather-details";
import Image from "next/image";

interface ICurrentWeatherProps {
  weather: IWeatherDetails;
}

export const Weather = ({ weather }: ICurrentWeatherProps) => {
  const { name, main, weather: weatherDetails, wind, sys } = weather;
  const { temp, feels_like, humidity, pressure } = main;
  const weatherIcon = weatherDetails[0].icon;
  console.log(weatherIcon);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex items-center">
        <Image
          src={`http://openweathermap.org/img/wn/01d@2x.png`}
          alt={weatherDetails[0].description}
          width={100}
          height={100}
          className="w-100 h-100"
        />
        <div className="ml-4">
          <p className="text-xl">{Math.round(temp)}°C</p>
          <p className="text-sm">{weatherDetails[0].description}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>Feels like: {Math.round(feels_like)}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Pressure: {pressure} hPa</p>
        <p>Wind: {wind.speed} m/s</p>
        <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};
