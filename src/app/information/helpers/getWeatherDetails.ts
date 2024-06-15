import { IForecastDetails } from "@/api/types/forecast-details";
import { IWeatherDetails } from "@/api/types/weather-details";

interface IData {
  weather: IWeatherDetails;
  forecast: IForecastDetails;
}

export async function getWeatherDetails(name: string): Promise<IData> {
  try {
    //---weather-params-by-country-name
    const weatherParam = new URLSearchParams({
      q: name,
      appid: process.env.API_KEY!,
      units: "metric",
    }).toString();

    //---api-call-for-weather
    const weatherResponse = await fetch(
      process.env.BASE_API! + "/weather?" + weatherParam
    );
    const weatherData: IWeatherDetails = await weatherResponse.json();
    //-------------------------------------------------------------------------------------------------

    //---forecast-params-by-country-lat-lon
    const forecastParam = new URLSearchParams({
      lat: weatherData.coord.lat.toString(),
      lon: weatherData.coord.lon.toString(),
      cnt: "7",
      appid: process.env.API_KEY!,
    }).toString();

    //---api-call-for-forecast
    const forecastResponse = await fetch(
      process.env.BASE_API! + "/forecast/daily?" + forecastParam
    );
    const forecastrData: IForecastDetails = await forecastResponse.json();

    return {
      weather: weatherData,
      forecast: forecastrData,
    };
  } catch {
    throw new Error("something");
  }
}
